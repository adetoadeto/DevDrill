import SmallButton from "../Button/SmallButton";
import Form from "./Form";
import { Link } from "react-router-dom";
import Img from "../../assets/loginImg.png";

function LoginPage() {
  return (
    <modal className="account-modal">
      <div>
        <img src={Img} alt="sky rocketing rocket" />
      </div>

      <div className="account-form">
        <h2>Login</h2>
        <p className="tagline">Sign in to your account </p>
        <form className="login-page">
          <Form
            label="Email"
            placeholder="Enter your email address"
            className="input-box"
          />
          <Form
            label="Password"
            placeholder="Enter your password"
            className="input-box"
          />
          <SmallButton text="LOGIN" />
        </form>
        <p>
          New User? <Link to="/DevDrill/account">REGISTER</Link>
        </p>
      </div>
    </modal>
  );
}

export default LoginPage;
