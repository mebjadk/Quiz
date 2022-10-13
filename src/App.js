import "./App.css";
import Start from "./Components/Start";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import React, { useState, useContext } from "react";
import { QuizContext } from "./Components/Contexts";
function App() {
  const [gameState, setgameState] = useState("start");
  const[score,setScore]=useState(0)
  return (
    <>
      <div className="App">
        <QuizContext.Provider value={{ gameState, setgameState,score,setScore }}>
          {gameState === "start" && <Start />}
          {gameState === "result" && <Result />}
          {gameState === "quiz" && <Quiz />}
        </QuizContext.Provider>
      </div>
    </>
  );
}

export default App;
