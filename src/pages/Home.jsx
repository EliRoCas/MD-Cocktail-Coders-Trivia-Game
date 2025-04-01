import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./home.scss";

const Home = () => {
  const [showRules, setShowRules] = useState(false);
  const navigate = useNavigate();

  const handleToggleRules = () => {
    setShowRules((prevShowRules) => !prevShowRules);
  };

  const handleNavigate = () => {
    navigate("/trivia");
  };

  return (
    <div className="homeContainer">
      <div className="homeData">
        <h1>Welcome </h1>
        <button onClick={handleNavigate}>Game Start</button>
        <button onClick={handleToggleRules}>
          {showRules ? "Hide Rules" : "View Game Rules"}
        </button>
      </div>

      {showRules && (
        <div className="rules">
          <h2>Game Rules</h2>
          <ul>
            <li>Rule 1: Each player must have their drink ready.</li>
            <li>Rule 2: The player must guess the cocktail.</li>
            <li>Rule 3: The player must spin the wheel of rewards and punishments.</li>
            <li>Rule 4: The player must do what the wheel indicates.</li>
            <li>Repeat the process until everyone is satisfied.</li>
            <li>Have fun and drink responsibly!</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
