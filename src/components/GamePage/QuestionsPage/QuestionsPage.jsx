import "./QuestionsPage.css";
import SmallButton from "../../Button/SmallButton";
import { Link } from "react-router-dom";
import alarmClock from "../../../assets/alarm-clock.png"

function QuestionsPage ()  {
  return (
    <section className="game-section__questions-page">
        <aside>
          <img src={alarmClock} alt="" />
          <div className="aside-articles">
          <strong>NodeJS</strong>
          <div><strong className="heading">Stage:</strong><span>Intermediate</span></div>
          <div><strong className="heading">Best record:</strong><span>35 questions answered in 10 mins</span></div>
          <button className="small-button"><Link to="/play/game-summary">End Game</Link></button>
        </div>
        </aside>

        <div>
          <div className="question-box__header">
            <h2>Node Js</h2>
            <div>
              <p><strong>40</strong><span>Minutes</span></p>
              <strong>:</strong>
              <p><strong>00</strong><span>Seconds</span></p>
            </div>
          </div>

          <div className="question-box__title">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quia!</p>
          </div>

          <div className="question-box__options">
            <button>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequuntur nulla dicta harum possimus.</button>
            <button>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequuntur nulla dicta harum possimus.</button>
            <button>Lorem ipsum dolor sit amet consectetur adipisicing elit. </button>
            <button>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequuntur </button>
            
          </div>
          <SmallButton text="Next"/>
        </div>
    </section>
  )
}

export default QuestionsPage
