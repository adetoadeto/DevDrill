import axios from "axios";
import { arrayToShuffled } from "array-shuffle";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import "./QuestionsPage.css";
import alarmClock from "../../../assets/alarm-clock.png";

import SmallButton from "../../Button/SmallButton";
import QuizSummary from "../QuizSummary/QuizSummary";

function QuestionsPage() {
  const { field, stage } = useParams();
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [countDown, setCountDown] = useState(60);
  const dialog = useRef();

  useEffect(() => {
    handleFetchQuestions();
  }, []);

  async function handleFetchQuestions() {
    try {
      const response = await axios.get("/api/quiz", {
        params: {
          courseName: field,
          level: stage,
        },
      });
      const data = await response.data;
      setQuestions(arrayToShuffled(data));
    } catch (err) {
      console.log(err.message);
    }
  }

  function handleSelectedOption(qIndex, e) {
    const userAnswer = e.target.innerText;
    setUserAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        index: qIndex,
        question: questions[qIndex].question,
        userAnswer,
        correctAnswer: questions[qIndex].answer,
      },
    ]);
    displayNextQuestion();
  }

  function displayNextQuestion() {
    setQuestionIndex((prevState) => prevState + 1);
  }

  function handleCountDown() {
    if (countDown > 0) {
      setTimeout(() => {
        let newCountDown = countDown - 1;
        if (newCountDown < 10) {
          newCountDown = `0${newCountDown}`;
        }
        setCountDown(newCountDown);
      }, 1000); //one second
    }
  }
  handleCountDown();

  function handleShowModal () {
    dialog.current.open();
  }

  //when countdown is at 00, open quiz summary modal

  return (
    <>
    <QuizSummary ref={dialog}/>
      <section className="game-section__questions-page">
        <aside>
          <strong>{field}</strong>
          <div>
            <strong className="heading">Stage:</strong>
            <span>{stage}</span>
          </div>
          <div>
            <strong className="heading">Best record:</strong>
            <span>35 questions answered in 30 seconds</span>
          </div>
          <SmallButton onClick={handleShowModal}>
            End Game
          </SmallButton>
        </aside>

        <div>
          <div className="question-box__header">
            <h2>{field}</h2>
            <div>
              <p>
                <strong>00</strong>
                <span>Minutes</span>
              </p>
              <strong>:</strong>
              <p>
                <strong>{countDown}</strong>
                <span>Seconds</span>
              </p>
            </div>
          </div>

          {questions.length > 0 && countDown > 0 && (
            <div className="question-box">
              <div>
                <p className="question-box__title">
                  {questions[questionIndex].question}
                </p>

                <div className="question-box__options">
                  {questions[questionIndex].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        handleSelectedOption(questionIndex, e);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <img src={alarmClock} alt="" />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default QuestionsPage;
