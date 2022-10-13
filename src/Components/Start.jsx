import React from "react";
import { useContext } from "react";
import { QuizContext } from "./Contexts";
import "/home/jarvis/Desktop/React/quiz/src/Components/start.css";
const Start = () => {
  const { gameState, setgameState } = useContext(QuizContext);
  return (
    <div className="Button">
      <button
        onClick={() => {
          setgameState("quiz");
        }}
      >
        Start
      </button>
    </div>
  );
};
export default Start;
