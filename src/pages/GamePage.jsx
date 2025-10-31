import { Outlet } from "react-router-dom";

function GamePage () {
  return (
    
    <section className="game-page">
      <Outlet/>
    </section>
  )
}

export default GamePage;