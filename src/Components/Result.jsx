import React, { useContext } from "react";
import { QuizContext } from "./Contexts";
const Result = () => {
  const{setScore,score,setgameState} =useContext(QuizContext)
  return (
    <div>
      <h1>Result</h1>
      <h4>Score is{score}</h4>
      <button onClick={()=>{
        setgameState("start")
        setScore(0)
      }}>Restart</button>
    </div>
  );
};

export default Result;
