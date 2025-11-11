import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";
import SmallButton from "../../Button/SmallButton";
import QuizSummaryCard from "./QuizSummaryCard";
import "./quizSummary.css";

function QuizSummary({ ref }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="quiz-summary-modal">
      <form method="dialog">
        <button className="close-modal">
          <i class="fa-solid fa-circle-xmark"></i>
        </button>
      </form>
      <div className="game-section__quiz-summary">
        <i class="fa-regular fa-circle-check"></i>
        <h2>Game Over!</h2>
        <p>
          Well done! Here is a <Link to="/">full summary</Link>
        </p>
        <div>
          <QuizSummaryCard heading="Questions Answered" text="10" />
          <QuizSummaryCard heading="Questions Failed" text="2" />
          <QuizSummaryCard heading="Score" text="80%" id="fill" />
        </div>
        <SmallButton>
          <Link to="/play">Play Again</Link>
        </SmallButton>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}

export default QuizSummary;
