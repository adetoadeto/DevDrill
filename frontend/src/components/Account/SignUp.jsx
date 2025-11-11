import Form from "../Form";
import SmallButton from "../Button/SmallButton";

function SignUp({modalChoice}) {
  return (
    <div className="account-form">
      <h2>Register</h2>
      <p className="tagline">Create an account to access all the features </p>
      <form className="signup-page">
        <div>
          <Form
            label="First Name"
            placeholder="Enter your first name"
            className="input-box"
          />

          <Form
            label="Last Name"
            placeholder="Enter your last name"
            className="input-box"
          />
        </div>
        <Form
          label="Email"
          placeholder="Enter your email address"
          className="input-box"
        />
        <div>
          <Form
            label="Password"
            placeholder="Enter your password"
            className="input-box"
          />

          <Form
            label="Confirm Password"
            placeholder="Re-enter your password"
            className="input-box"
          />
        </div>
        <SmallButton>REGISTER</SmallButton>
      </form>
      <p>
        Already have an Account? <button onClick={()=> modalChoice("login")}>LOGIN</button>
      </p>
    </div>
  );
}

export default SignUp;
