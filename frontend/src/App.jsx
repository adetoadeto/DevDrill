import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import LandingPage from "./components/GamePage/LandingPage/LandingPage";
import QuestionsPage from "./components/GamePage/QuestionsPage/QuestionsPage";
import QuizSummary from "./components/GamePage/QuizSummary/QuizSummary";
import AdminDashboard from "./pages/AdminDashboard";
import ProfileSettingsPage from "./pages/ProfileSettingsPage";
import Footer from "./components/Footer/Footer";

function App() {
  
  return (
   <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>}/>

          <Route path="/play" element={<GamePage/>}>
            <Route index element={<LandingPage/>} />
            <Route path="/play/game-started/:field/:stage" element={<QuestionsPage/>} />
          </Route>
          <Route path="/admin-dashboard" element={<AdminDashboard/>} />
          <Route path="/profile-settings" element={<ProfileSettingsPage/>} />

        </Routes>
        <Footer />
      </Router>
   </>
  )
}

export default App
