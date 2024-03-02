import  { useState } from "react";
import "./Login.css";
import SignUpForm from "./SignUP";
import SignInForm from "./SignIn";



export default function Login() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "robo-register-container " + (type === "signUp" ? "robo-register-right-panel-active" : "");
  return (
    <div className="Login-register-main-div">
      <h2>Sign in/up Form</h2>
      <div className={containerClass} id="container">
       <SignUpForm/>
       <SignInForm/>
       
        <div className="robo-register-overlay-container">
          <div className="robo-register-overlay">
            <div className="robo-register-overlay-panel robo-register-overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="robo-register-overlay-panel robo-register-overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}