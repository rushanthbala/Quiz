import React, { useEffect, useState } from "react";
import Questions from "../api/question.json";
import M from "materialize-css";
import "./quizBox.css";
import Button from "./customise/Button";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import TimerIcon from "@material-ui/icons/Timer";
import CorrectQuestionSound from "../assect/audio files/correct-answer.mp3";
import WrongQuestionSound from "../assect/audio files/wrong-answer.mp3";
import ButtonQuestionSound from "../assect/audio files/button-sound.mp3";

export default function Quiz() {
  const [question, setQuestion] = useState(Questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    question[currentQuestionIndex]
  );
  const [answer, setAnswer] = useState(question[currentQuestionIndex].answer);
  const [numberQuestion, setNumberQuestion] = useState(0);
  // const [numberOfAnswerDo, setNumberOfAnswerDo] = useState(0);
  const [score, setScore] = useState(0);
  const [CorrectAnswer, setCorrectAnswer] = useState(0);
  const [WrongAnswer, setWrongAnswer] = useState(0);

  const [Hint, setHint] = useState(5);
  const [FityFity, setFityFity] = useState(2);
  // const [UseFityFity, setUseFityFity] = useState(0);
  // const [Time, setTime] = useState({});
  const onButtonClick = (e) => {
      console.log(e.target.id);
      switch (e.target.id) {
      case 'next':
      let nextQuestion = currentQuestionIndex + 1;
          // setCurrentQuestionIndex(currentQuestionIndex1)  
          setCurrentQuestionIndex(nextQuestion);
          setCurrentQuestion(question[nextQuestion]);
          setAnswer(question[nextQuestion].answer);
          setNumberQuestion(numberQuestion + 1);     
        break;
        case 'previos':
          previosQuestion()
        break;
    
      default:
      console.log(currentQuestion);

        break;
    }
    onButtonClickSound();
  };
  const onButtonClickSound = () => {
    setTimeout(() => {
      document.getElementById("buttonQuestionSound").play();
    }, 400);
  };
const previosQuestion =() =>{
  if (currentQuestionIndex==0 ) {
    alert('no privou')
  }else {
    let previosQuestion = currentQuestionIndex - 1;
    // setCurrentQuestionIndex(currentQuestionIndex1)  
    setCurrentQuestionIndex(previosQuestion);
    setCurrentQuestion(question[previosQuestion]);
    setAnswer(question[previosQuestion].answer);
    setNumberQuestion(numberQuestion + 1);  
  }
    
}
  const onHandingClick = (e) => {
    if (e.target.innerHTML === answer) {
      setTimeout(() => {
        document.getElementById("correctQuestionSound").play();
      }, 500);
      correctAnswer();
    } else {
      setTimeout(() => {
        document.getElementById("wrongQuestionSound").play();
      }, 400);
      wrongAnswer();
    }
    const nextQuestion = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextQuestion);
    setCurrentQuestion(question[nextQuestion]);
    setAnswer(question[nextQuestion].answer);
    setNumberQuestion(numberQuestion + 1);
  };

  const correctAnswer = (answerOption) => {
    M.toast({
      html: "Correct Answer",
      classes: "rounded",
    });
    setScore(score + 1);
    setCorrectAnswer(correctAnswer + 1);
  };

  const wrongAnswer = () => (
    navigator.vibrate(1000),
    M.toast({
      html: "Wrong Answer",
      classes: "rounded",
      displayLength: 1500,
    }),
    setWrongAnswer(wrongAnswer + 1)
    // setNumberOfAnswerDo(numberOfAnswerDo + 1),
    // console.log(currentQuestionIndex)
  );

  return (
   <div className='container'>
      <div  >
      <audio id="correctQuestionSound" src={CorrectQuestionSound}></audio>
      <audio id="wrongQuestionSound" src={WrongQuestionSound}></audio>
      <audio id="buttonQuestionSound" src={ButtonQuestionSound}></audio>
      <div className="quizBox_container">
        <div className="quizBox_icon_div">
          <p className="quizBox_ion">
            <span>
              {/* //fifty fity icon */}
              <Brightness4Icon htmlColor="green" />
            </span>
            <span className="quizBox_hint">{FityFity}</span>
          </p>
          <p>
            <span>
              {/* hint icon */}
              <EmojiObjectsIcon htmlColor="orange" />
              <span className="quizBox_hint">{Hint}</span>
            </span>
          </p>
        </div>
        <div className="quizBox_icon_div">
          <p>
            <span>{currentQuestionIndex + 1} of 15 </span>
          </p>
          <p>
            {" "}
            <span>
              <TimerIcon />
            </span>
            <span className="quizBox_hint">2.55</span>
          </p>
        </div>
        {/* <div></div> */}
        <h2 className="quizBox_question">{currentQuestion.question}</h2>
        <div className="quizBox_answer">
          <div className="quizBox_answer_left">
            <p className="quizBox_option" onClick={onHandingClick}>
              {currentQuestion.optionA}
            </p>
            <p className="quizBox_option" onClick={onHandingClick}>
              {currentQuestion.optionB}
            </p>
          </div>
          <div className="quizBox_answer_right">
            <p className="quizBox_option" onClick={onHandingClick}>
              {currentQuestion.optionC}
            </p>
            <p className="quizBox_option" onClick={onHandingClick}>
              {currentQuestion.optionD}
            </p>
          </div>
        </div>
      </div>
      <div className="quizBox_button">
        <button  class="btn waves-effect waves-light " id='previos' onClick={onButtonClick} contant="Previos">
          Previos
        </button>
        <button  class="btn waves-effect waves-light " id='next' onClick={onButtonClick} contant="next">
          Next
        </button>
        <button  class="btn waves-effect waves-light" id='submit' onClick={onButtonClick} contant="submit">
          submit
        </button>
      </div>
    </div>
 
   </div>
 );
}
