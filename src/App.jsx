import "./App.css";
import Header from "./Header.jsx";
import Dashboard from "./Dashboard.jsx";
import "./global.css";

// 2. Set chains

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <Header />
      <Dashboard />
    </div>
    
  );
}

export default App;
