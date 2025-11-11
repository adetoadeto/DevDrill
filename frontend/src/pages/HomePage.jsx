import { Link } from "react-router-dom";
import "../components/Home/home.css";
import LargeButton from "../components/Button/LargeButton";
import Overview from "../components/Home/Overview";
import Reviews from "../components/Home/Reviews";
import Img2 from "../assets/walking-apple.png";
import heroImg from "../assets/heroImg.png";
import SmallButton from "../components/Button/SmallButton";

function Home() {
  return (
    <>
      <main>
        <article>
          <h1>Gain <span>mastery</span> of what <span>you know</span> in <span>web development</span></h1>
          <p> 
            Test your knowledge. Move beyond being able to code into being able
            to explain concepts in web development.
          </p>
          <SmallButton><Link to="/play">Get Started</Link></SmallButton>
        </article>
        <div><img src={heroImg} alt="" /></div>
      </main>

      <section className="explore-fields">
        <h2>Diverse <span>fields</span> to <span>choose</span> from</h2>
        <p>Gain mastery of theoretical questions in web development by
            attempting quiz-like questions from across different fields</p>
        <div>
          <LargeButton text="HTML" id="fill" />
          <LargeButton text="CSS" id="transparent"/>
          <LargeButton text="JS" id="fill"/>
          <LargeButton text="React" id="transparent"/>
          <LargeButton text="Git" id="fill"/>
          <LargeButton text="NodeJS" id="transparent"/>
        </div>
      </section>

      <section id="overview-section">
          <h2><span>How</span> It Works </h2>

          <div>
            <Overview className="fill" text="Choose a field and level of expertise"/>
            <i class="fa-solid fa-arrow-right"></i>
            <Overview className="outline" text="Race against time to answer as many questions as possible"/>
            <i class="fa-solid fa-arrow-right"></i>
            <Overview className="fill" text="Instant answers to questions upon quiz completion"/>
            <i class="fa-solid fa-arrow-right"></i>
            <Overview className="outline" text="Game summary with total score to see how well you have done"/>
            <i class="fa-solid fa-arrow-right"></i>
            <Overview className="fill" text="In all, solidify existing knowledge and gain new knowledge"/>
          </div>
       
      </section>

      <section className="review-section">
        <h2><span>Re</span>views</h2>
        <div>
          <Reviews />
          <img src={Img2} alt="" />
          <Reviews />
        </div>
      </section>
    </>
  );
}

export default Home;
