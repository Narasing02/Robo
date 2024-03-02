import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    // const { email, password } = state;
    // alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="robo-register-form-container robo-register-sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <div className="robo-register-social-container">
          <a href="#" className="social">
          <FaFacebook />
          </a>
          <a href="#" className="social">
            <FcGoogle />
          </a>
          <a href="#" className="social">
          <FaTwitter />
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
     <Link to="/roboscorp"> <button>Sign In</button></Link> 
      </form>
    </div>
  );
}

export default SignInForm;