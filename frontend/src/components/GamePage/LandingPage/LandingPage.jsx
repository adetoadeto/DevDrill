import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

import SmallButton from "../../Button/SmallButton";
import "./landingPage.css";
import PremiumPlan from "../../PremiumPlan/PremiumPlan";

function LandingPage() {
  const [courses, setCourses] = useState([]);
  const [selection, setSelection] = useState({
    field: "",
    stage: "",
  });
  const dialog = useRef();

  function handleShowModal() {
    dialog.current.open();
  }

  let free = false;

  useEffect(() => {
    async function handleFetchAllCourses() {
      try {
        const response = await axios.get("/api/course");
        const data = await response.data;
        setCourses(data);
      } catch (error) {
        console.log(error);
      }
    }
    handleFetchAllCourses();
  }, []);

  function handleSelectField(selectedField) {
    setSelection((prev) => ({
      ...prev,
      field: selectedField,
    }));
  }

  function handleSelectStage(selectedStage) {
    setSelection((prev) => ({
      ...prev,
      stage: selectedStage,
    }));
  }

  async function handleFetchQuestions() {
    try {
      const response = await axios.get("/api/quiz", {
        params: {
          courseName: selection.field,
          level: selection.stage,
        },
      });
      const data = await response.data;
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  const startQuiz = selection.field && selection.stage && (!free || selection.stage === "beginners")
  return (
    <>
      <PremiumPlan ref={dialog} />
      <section className="game-section__landing-page">
        <h2>
          Select a <span>field</span> and <span>stage</span>
        </h2>

        <div>
          <h3>Fields</h3>
          <div>
            {courses.map((item) => (
              <SmallButton
                key={item._id}
                onClick={() => handleSelectField(item.courseName)}
                isSelected={selection.field === item.courseName}
              >
                {item.courseName}
              </SmallButton>
            ))}
          </div>
        </div>

        <div>
          <h3>Stages</h3>
          <div>
            <SmallButton
              onClick={() => handleSelectStage("beginners")}
              isSelected={selection.stage === "beginners"}
            >
              beginner
            </SmallButton>

            <SmallButton
              onClick={() => {
                handleSelectStage("intermediate");
                {
                  free && handleShowModal();
                }
              }}
              isSelected={selection.stage === "intermediate"}
            >
              intermediate {free && <i class="fa-solid fa-lock"></i>}
            </SmallButton>

            <SmallButton
              onClick={() => {
                handleSelectStage("advanced");
                {
                  free && handleShowModal();
                }
              }}
              isSelected={selection.stage === "advanced"}
            >
              advanced {free && <i class="fa-solid fa-lock"></i>}
            </SmallButton>
          </div>
        </div>

        {startQuiz && <SmallButton>
            <Link
              to={`/play/game-started/${selection.field}/${selection.stage}`}
            >
              Start Quiz
            </Link>
          </SmallButton>
          }
      </section>
    </>
  );
}

export default LandingPage;
// if free and click on intermediate or advanced, remove the start quiz. only beginners should be allowed
//stage and field must be selected to proceed,
// if paid, show quiz button but stage and field must be selected
