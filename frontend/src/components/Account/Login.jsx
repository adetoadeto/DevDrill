import Form from "../Form";
import SmallButton from "../Button/SmallButton";

function Login({modalChoice}) {
  return (
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
          <SmallButton>LOGIN</SmallButton>
        </form>
        <p>
          New User? <button onClick={()=> modalChoice("signup")}>REGISTER</button>
        </p>
      </div>
  );
}

export default Login;
