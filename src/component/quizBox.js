import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Questions from "../api/question.json";
import M from "materialize-css";
import "./quizBox.css";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import TimerIcon from "@material-ui/icons/Timer";
import CorrectQuestionSound from "../assect/audio files/correct-answer.mp3";
import WrongQuestionSound from "../assect/audio files/wrong-answer.mp3";
import ButtonQuestionSound from "../assect/audio files/button-sound.mp3";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import RenderTime from "./function/rederTime";
import AlertResult from "./function/resultAlert";
import Fade from "react-reveal/Fade";
import useSound from "use-sound";
import Countdown from "react-countdown";

export default function Quiz() {
  const [subject] = useState(Questions.science);
  const [question] = useState(subject);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    question[currentQuestionIndex]
  );
  const [answer, setAnswer] = useState(question[currentQuestionIndex].answer);
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [numberOfAnswerDo, setNumberOfAnswerDo] = useState(0);
  const [score, setScore] = useState(0);
  const [noOfCorrectAnswer, setNoOfCorrectAnswer] = useState(0);
  const [noOfUseHint, setNoOfUseHint] = useState(0);
  const [noOfUseFiftyFity, setNoOfUseFiftyFity] = useState(0);
  const [WrongAnswers, setWrongAnswers] = useState(0);
  const [Hint, setHint] = useState(5);
  const [fityFity, setFityFity] = useState(2);
  const [useFityFity, setUseFityFity] = useState(true);
  const [ifTimesOut, setIfTimesOut] = useState(true);
  const [priviosRandomNo, setPriviosRandomNo] = useState([]);
  const [clickValue, setClickValue] = useState(0);
  const [correctQuestionSound] = useSound(CorrectQuestionSound);
  const [wrongQuestionSound] = useSound(WrongQuestionSound);
  const [buttonQuestionSound] = useSound(ButtonQuestionSound);

  const onButtonClick = (e) => {
    renderResultAlert();
    showHiddenOption();
    switch (e.target.id) {
      case "next":
        if (currentQuestionIndex < 14) {
          let nextQuestion = currentQuestionIndex + 1;
          setCurrentQuestionIndex(nextQuestion);
          setCurrentQuestion(question[nextQuestion]);
          setAnswer(question[nextQuestion].answer);
          setNumberQuestion(numberQuestion + 1);
        }

        break;
      case "previos":
        previosQuestion();
        break;

      default:
        console.log(currentQuestion);

        break;
    }
    buttonQuestionSound();
  };
  const previosQuestion = () => {
    if (currentQuestionIndex === 0) {
      alert("no privou");
    } else {
      let previosQuestion = currentQuestionIndex - 1;
      setCurrentQuestionIndex(previosQuestion);
      setCurrentQuestion(question[previosQuestion]);
      setAnswer(question[previosQuestion].answer);
      setNumberQuestion(numberQuestion + 1);
    }
  };
  const onHandingClick = (e) => {
    setClickValue(clickValue + 1);
    var nextQuestion = currentQuestionIndex + 1;
    console.log(nextQuestion, "nextQuestion");
    if (nextQuestion > 14) {
      console.log("=====================");
      renderResultAlert();
    } else {
      showHiddenOption();
      console.log("next===", nextQuestion);
      if (e.target.innerHTML === answer) {
        setTimeout(() => {
          correctQuestionSound();
        }, 500);
        correctAnswer();
      } else {
        setTimeout(() => {
          wrongQuestionSound();
        }, 200);
        wrongAnswer();
      }
      setCurrentQuestionIndex(nextQuestion);
      setCurrentQuestion(question[nextQuestion]);
      setAnswer(question[nextQuestion].answer);
      setNumberQuestion(numberQuestion + 1);
      setNumberOfAnswerDo(numberOfAnswerDo + 1);
    }
  };
  const onHandingClickNext = (e) => {
    console.log(currentQuestionIndex,'currentQuestionIndex');
    setClickValue(clickValue + 1);
    var nextQuestion = currentQuestionIndex +1;
    showHiddenOption();
    console.log(nextQuestion, "nextQuestion");
      setCurrentQuestionIndex(nextQuestion);
      setCurrentQuestion(question[nextQuestion]);
      setAnswer(question[nextQuestion].answer);
      setNumberQuestion(numberQuestion + 1);
      setNumberOfAnswerDo(numberOfAnswerDo + 1);
    
  };
  const correctAnswer = (answerOption) => {
    M.toast({
      html: "Correct Answer",
      classes: "rounded",
    });
    setScore(score + 1);
    setNoOfCorrectAnswer(noOfCorrectAnswer + 1);
  };

  const wrongAnswer = () => (
    navigator.vibrate(1000),
    setWrongAnswers(WrongAnswers + 1),
    M.toast({
      html: "Wrong Answer",
      classes: "rounded",
      displayLength: 1500,
    })
  );
  const onHintClick = () => {
    if (Hint > 0) {
      setNoOfUseHint(noOfUseHint + 1);
      const options = Array.from(document.querySelectorAll(".quizBox_option"));
      let correctAnswerIndexNo;
      options.forEach((option, i) => {
        if (
          option.innerHTML.toLocaleLowerCase() === answer.toLocaleLowerCase()
        ) {
          correctAnswerIndexNo = i;
          console.log(correctAnswerIndexNo);
        }
      });
      while (true) {
        const randomNo = Math.round(Math.random() * 3);
        if (
          randomNo !== correctAnswerIndexNo &&
          !priviosRandomNo.includes(randomNo)
        ) {
          options.forEach((option, i) => {
            if (i === randomNo) {
              option.style.visibility = "hidden";
              console.log("claSS ");
              setHint(Hint - 1);
              setPriviosRandomNo(priviosRandomNo.concat(randomNo));
            }
          });
          break;
        }
        if (priviosRandomNo.length >= 3) {
          break;
        }
      }
    }
  };

  const onFiftyClick = () => {
    if (fityFity > 0 && useFityFity === true) {
      setNoOfUseFiftyFity(noOfUseFiftyFity + 1);
      const options = Array.from(document.querySelectorAll(".quizBox_option"));
      let correctAnswerIndexNo;
      let randomNos = [];
      options.map((option, i) =>
        option.innerHTML.toLocaleLowerCase() === answer.toLocaleLowerCase()
          ? (correctAnswerIndexNo = i)
          : (correctAnswerIndexNo = null)
      );
      let count = 0;
      do {
        let randomNo = Math.round(Math.random() * 3);
        if (randomNo !== correctAnswerIndexNo) {
          if (
            randomNos.length < 2 &&
            !randomNos.includes(randomNo) &&
            !randomNos.includes(correctAnswerIndexNo)
          ) {
            randomNos.push(randomNo);
            count++;
          } else {
            while (true) {
              let newRandomNo = Math.round(Math.random() * 3);
              if (
                !randomNos.includes(newRandomNo) &&
                !randomNos.includes(correctAnswerIndexNo)
              ) {
                console.log("qsdw");
                randomNos.push(newRandomNo);
                count++;
                break;
              }
            }
          }
        }
      } while (count < 2);
      options.forEach((option, i) => {
        if (randomNos.includes(i)) {
          option.style.visibility = "hidden";
          setFityFity(fityFity - 1);
          setUseFityFity(false);
        }
      });
    }
  };
  const showHiddenOption = () => {
    setPriviosRandomNo([]);
    setUseFityFity(true);
    const options = Array.from(document.querySelectorAll(".quizBox_option"));
    options.forEach((option, i) => {
      option.style.visibility = "visible";
    });
  };
  const onTimeOut = () => {
    alert("done ");
  };
  const renderResultAlert = () => {
    if (ifTimesOut) {
      if (clickValue < 15) {
        return <div></div>;
      } else {
        return (
          <AlertResult
            isResultAlert={true}
            NoOfCorrectAnswer={noOfCorrectAnswer}
            noOfUseFiftyFity={noOfUseFiftyFity}
            noOfUseHint={noOfUseHint}
          />
        );
      }
    }
  };
  const setIfTimesOuts = () => {
    console.log("sdsd");
    return (
<div>d</div>
      // <AlertResult
      //   isResultAlert={false}
      //   NoOfCorrectAnswer={noOfCorrectAnswer}
      //   noOfUseFiftyFity={noOfUseFiftyFity}
      //   noOfUseHint={noOfUseHint}
      // />
    );
  };
  const renderer = ({ hours, minutes, seconds, completed }) => {
    // let nextQuestion = currentQuestionIndex + 1
    if (completed) {
      console.log(122);
    console.log(currentQuestionIndex,'currentQuestionIndex');
      // onHandingClick()
      // alert('next Quiz')
      onHandingClickNext(); 

      return (
        // <AlertResult
        //   isResultAlert={true}
        //   NoOfCorrectAnswer={noOfCorrectAnswer}
        //   noOfUseFiftyFity={noOfUseFiftyFity}
        //   noOfUseHint={noOfUseHint}
        // />
        <p>dd</p>

      );
      // onButtonClick();
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  // setIfTimesOut(false)

  // )
  return (
    <div className="container">
      <div>
        <audio id="correctQuestionSound" src={CorrectQuestionSound}></audio>
        <audio id="wrongQuestionSound" src={WrongQuestionSound}></audio>
        <audio id="buttonQuestionSound" src={ButtonQuestionSound}></audio>
        <div className="quizBox_container">
          <div className="quizBox_icon_div">
            <p onClick={onFiftyClick}>
              <span>
                {/* //fifty fity icon */}
                <Brightness4Icon htmlColor="green" />
              </span>
              <span className="quizBox_hint">{fityFity}</span>
            </p>
            {/* <CountdownCircleTimer
              isPlaying
              duration={3}
              colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
              onComplete={setIfTimesOuts }
              size="120"
              strokeWidth="4"
            >
              <RenderTime />
              {/* {renderTime} */}
            {/* </CountdownCircleTimer> */}
            {/* <Countdown date={Date.now() + 5000} renderer={renderer} /> */}
            <Countdown date={Date.now() + 5000}>
              {/* <AlertResult
                isResultAlert={true}
                NoOfCorrectAnswer={noOfCorrectAnswer}
                noOfUseFiftyFity={noOfUseFiftyFity}
                noOfUseHint={noOfUseHint}
              /> */}
              
            </Countdown>
            <p onClick={onHintClick}>
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
              <span className="quizBox_hint">
                 {/* <Countdown date={Date.now() + 3000} renderer={renderer} /> */}
                 </span>
            </p>
          </div>
          <h2 className="quizBox_question">
            <Fade left cascade>
              {currentQuestion.question}
            </Fade>
          </h2>
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
        {/* <div className="quizBox_button">
          <button
            class="btn waves-effect waves-light "
            id="previos"
            onClick={onButtonClick}
            contant="Previos"
          >
            Previos
          </button>
          <button
            class="btn waves-effect waves-light "
            id="next"
            onClick={onButtonClick}
            contant="next"
          >
            Next
          </button>
          <button
            class="btn waves-effect waves-light"
            id="submit"
            onClick={onButtonClick}
            contant="submit"
          >
            submit
          </button>
        </div>
     */}
      </div>
      {renderResultAlert()}
    </div>
  );
}
