import QuizSummaryCard from "./QuizSummaryCard"
import "./quizSummary.css"
import {Link} from "react-router-dom";

function QuizSummary () {
  return (
    <section className="game-section__quiz-summary">
      <i class="fa-regular fa-circle-check"></i>
        <h2>Game Over!</h2>
        <p>Well done! Here is a <Link to="/">full summary</Link></p>
        <div>
          <QuizSummaryCard heading="Questions Answered" text="10"/>
          <QuizSummaryCard heading="Questions Failed" text="2"/>
          <QuizSummaryCard heading="Score" text="80%" id="fill"/>
        </div>
        <button className="small-button"><Link to="/play">Play Again</Link></button>
    </section>
  )
}

export default QuizSummary
