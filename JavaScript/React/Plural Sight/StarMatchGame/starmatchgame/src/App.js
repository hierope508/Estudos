import logo from "./logo.svg";
import "./App.css";
import StarDisplay from "./components/StarDisplay";
import PlayNumber from "./components/PlayNumber";
import utils from "./utils";
import { useState } from "react";

function App() {
  const [starNumber, setStartNumber] = useState(utils.random(1, 9));
  return (
    <div className="App">
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            <StarDisplay count={starNumber} />
          </div>
          <div className="right">
            {utils.range(1, 9).map((number) => (
              <PlayNumber number={number} key={number}></PlayNumber>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
