// Dashboard.js
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import "./Dashboard.css";
import { useWallet } from "@suiet/wallet-kit";

import {
  db,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  query,
  where,
} from "./Backend/firebase.jsx";

const Dashboard = () => {
  const [isSignUpButtonDisabled, setIsSignUpButtonDisabled] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const [referralCode, setReferralCode] = useState("");
  const [points, setPoint] = useState(1);
  const [
    userWalletTaggdToRefValueFromUrl,
    setUserWalletTaggdToRefValueFromUrl,
  ] = useState("");
  const [userAccount, setUserAccount] = useState(null);
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const walletCollectionRef = collection(db, "wallet");
  const wallet = useWallet();
  let isConnected = wallet.connected;
  let address = wallet.address;
  useEffect(() => {
    if (!wallet.connected) {
      return;
    }
  }, [isConnected]);

  const signup = async (userWalletAddress) => {
    setIsSignUpButtonDisabled(true);
    setIsSigningUp(true);
    const newWalletDocRef = doc(walletCollectionRef, userWalletAddress);
    await setDoc(newWalletDocRef, {
      points: 10,
    });
    setPoint(10);
    window.alert("\nSign up successful!");

    setHasSignedUp(true);
    setIsSignUpButtonDisabled(false);
    setIsSigningUp(false);
  };

  const redirectToNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const checkIsSignedUp = async (userWalletAddress) => {
    const walletCollectionRef = collection(db, "wallet");
    const walletDocRef = doc(walletCollectionRef, userWalletAddress);
    const walletDocSnapshot = await getDoc(walletDocRef);
    if (walletDocSnapshot.exists()) {
      setHasSignedUp(true);
    } else {
      setHasSignedUp(false);
    }
  };

  useEffect(() => {
    const getAccount = async () => {
      if (address) {
        setUserAccount(address?.toLowerCase());
      } else {
        setUserAccount(null);
      }
    };
    getAccount();
    if (address) {
      checkIsSignedUp(address?.toLowerCase());
    }
  }, [isConnected, address]);

  return (
    <div className="dashboard">
      <div className="stats-section">
        <div className="giff">
          <img className="gif-img" src="sui.gif" alt=" Landing Page" />
        </div>

        <div className="signup-button-container">
          <div
            className={
              isSignUpButtonDisabled || hasSignedUp || !isConnected
                ? "disabled-sign-up-button"
                : "active-sign-up-button"
            }
            onClick={() => {
              if (!hasSignedUp && !isSignUpButtonDisabled && isConnected) {
                signup(userAccount);
              }
            }}>
            {isSigningUp ? (
              <div className="spinnersignup"></div>
            ) : (
              <div className="signup-button-text">
                {isConnected ? "Sign Up" : "Connect Wallet"}
              </div>
            )}
          </div>
          <div
            className={"active-twitter-button"}
            onClick={() =>
              redirectToNewTab("https://twitter.com/Sweepstakexyz")
            }>
            <div>Twitter / X</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
