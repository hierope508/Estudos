import "./App.css";
import Game from "./components/Game";
import { useState } from "react";
function App() {
  const [gameId, setGameId] = useState(0);
  const newGame = () => {
    setGameId(gameId + 1);
  };

  return (
    <div className="App">
      <Game startNewGame={newGame} key={gameId} />
    </div>
  );
}

export default App;
