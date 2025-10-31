import SmallButton from "../../Button/SmallButton"
import "./landingPage.css";
import { Link } from "react-router-dom";

function LandingPage () {
  return (
    <section className="game-section__landing-page">
        
        <h2>Select a <span>field</span> and <span>stage</span></h2>
        <div>
            <h3>Fields</h3>
            <div>
                <SmallButton text="Html"/>
                <SmallButton text="CSS"/>
                <SmallButton text="Javascript"/>
                <SmallButton text="Git"/>
                <SmallButton text="React"/>
                <SmallButton text="Javascript Module Systems"/>
                <SmallButton text="NodeJS"/>
                <SmallButton text="SQL"/>
                <SmallButton text="Non-SQL"/>
            </div>
        </div>
        <div>
            <h3>Stages</h3>
            <div>
                  <SmallButton text="Beginner"/>
                  <SmallButton text="Intermediate"/>
                  <SmallButton text="Advanced"/>
            </div>
        </div>
        <button className="small-button"><Link to="/play/game-started">Start Quiz</Link></button>
    </section>
  )
}

export default LandingPage
