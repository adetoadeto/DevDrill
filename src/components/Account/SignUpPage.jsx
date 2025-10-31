import SmallButton from "../Button/SmallButton";
import Form from "./Form";
import { Link } from "react-router-dom";
import Img from "../../assets/loginImg.png";

function SignUpPage() {
  return (
    <modal className="account-modal">
      <div><img src={Img} alt="sky rocketing rocket" /></div>
      
      <div className="account-form">
        <h2>Register</h2>
        <p className="tagline">Create an account to access all the features </p>
        <form className="signup-page">
          <div >
            <Form label="First Name" placeholder="Enter your first name" className="input-box" />

            <Form label="Last Name" placeholder="Enter your last name" className="input-box" />
          </div>
          <Form label="Email" placeholder="Enter your email address" className="input-box"/>
          <div>
            <Form label="Password" placeholder="Enter your password" className="input-box"/>

            <Form label="Confirm Password" placeholder="Re-enter your password" className="input-box"/>
          </div>
          <SmallButton text="REGISTER" />
        </form>
         <p>
            Already have an Account? <Link to="/DevDrill/account/login">LOGIN</Link>
          </p>
      </div>
    </modal>
  );
}

export default SignUpPage;
