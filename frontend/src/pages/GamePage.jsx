import { Outlet } from "react-router-dom";
import "../components/GamePage/gamePage.css";

function GamePage () {
  return (
    <section className="game-page">
      <Outlet/>
    </section>
  )
}

export default GamePage;