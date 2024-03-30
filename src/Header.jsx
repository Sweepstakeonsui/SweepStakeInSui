import React from "react";
import "./Header.css";

import { ConnectButton } from "@suiet/wallet-kit";
const Header = () => {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <img className="logo" src="Sweepstake2.png" alt="Apotus Logo"></img>
        <a href="/"> </a>
      </div>
      <nav className="navigation">
        <ConnectButton />
      </nav>
    </header>
  );
};

export default Header;
