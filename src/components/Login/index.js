import React from 'react';
import { FaTimes } from 'react-icons/fa/index';
import { useGlobalContext } from '../../context';
import "./login.css"

const Login = () => {
  const {login, closeLogin} = useGlobalContext()
  return (
    <div
      className={`${login ? "login-form-container active" : "login-form-container"}`}>
      <FaTimes id="form-close" onClick={closeLogin} />
      <form>
        <h3>Login</h3>
        <input type="email" className="box" placeholder="enter your email" />
        <input
          type="password"
          className="box"
          placeholder="enter your password"
        />
        <input type="submit" className="btn" value="login now" />
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">remember me</label>
        <p>
          forget password? <a href="#">click here</a>
        </p>
        <p>
          don't have an account? <a href="#">register now</a>
        </p>
      </form>
    </div>
  );
}

export default Login