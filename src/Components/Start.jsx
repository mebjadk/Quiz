import React from "react";
import { useContext } from "react";
import { QuizContext } from "./Contexts";
import "/home/jarvis/Desktop/React/quiz/src/Components/start.css";
const Start = () => {
  const { gameState, setgameState } = useContext(QuizContext);
  return (
    <div className="Button">
      <h1>Quiz Application</h1>
      <button
        onClick={() => {
          setgameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};
export default Start;
