import React, { useState,useContext } from "react";
import { QuizContext } from "./Contexts";
import "../App.css";
import {Questions} from "./Question"
const Quiz = () => {
  const { score,setScore,setgameState} = useContext(QuizContext);
  const [currQuestion,setcurrQuestion]= useState(0);
  const[answer,setanswer]=useState("");
  const nextQuestion=()=>{
if(Questions[currQuestion].answer === answer)
{
  setScore(score+1);
}
setcurrQuestion(currQuestion+1);
  };
  const finishGame=()=>{
    if(Questions[currQuestion].answer === answer)
{
  setScore(score+1);
}
setgameState("result");

  };
  return (
    <div className="quizbox">
      <h4>{Questions[currQuestion].prompt}</h4>
      <button onClick={()=>{setanswer("optionA")}}>{Questions[currQuestion].optionA}</button>
      <button onClick={()=>{setanswer("optionB")}}>{Questions[currQuestion].optionB}</button>
      <button onClick={()=>{setanswer("optionC")}}>{Questions[currQuestion].optionC}</button>
      <button onClick={()=>{setanswer("optionD")}}>{Questions[currQuestion].optionD}</button>
      {currQuestion==Questions.length-1?(
        <button onClick={finishGame}>Finish Quiz</button>

      ) : (
        <button onClick={nextQuestion}>Next</button>
      )
      }
    </div>
  );
};

export default Quiz;
