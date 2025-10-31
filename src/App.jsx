import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
import AccountPage from "./pages/AccountPage";
import SignUpPage from "./components/Account/SignUpPage";
import LoginPage from "./components/Account/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/GamePage/LandingPage/LandingPage";
import QuestionsPage from "./components/GamePage/QuestionsPage/QuestionsPage";
import QuizSummary from "./components/GamePage/QuizSummary/QuizSummary";

function App() {
  
  return (
   <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="/play" element={<GamePage/>}>
            <Route index element={<LandingPage/>} />
            <Route path="/play/game-started" element={<QuestionsPage/>} />
            <Route path="/play/game-summary" element={<QuizSummary/>} />
          </Route>

          <Route path="/account" element={<AccountPage/>}>
            <Route index element={<SignUpPage/>} />
            <Route path="/account/login" element={<LoginPage/>} />
          </Route>

           <Route path="/admin" element={<AdminDashboard/>}/>

           <Route path="/user" element={<CustomerDashboard/>}/>
        </Routes>
        <Footer />
      </Router>
   </>
  )
}

export default App
