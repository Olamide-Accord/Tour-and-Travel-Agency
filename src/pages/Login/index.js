import React from 'react';
import {Link} from "react-router-dom";
import { useGlobalContext } from '../../context';
import "./login.css";
import Messages from "../../components/Messages"

const Login = () => {
  const {
    email, 
    setEmail, 
    password, 
    setPassword, 
    loginSubmit,
    resetPassword,
    message
  } = useGlobalContext()
  return (
    <div className="login-form-container">
      <form onSubmit={loginSubmit}>
        <h3>Login</h3>
        {message && <Messages/>}
        <input
          type="email"
          className="box"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="box"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" className="btn" value="login now" />
        <input type="checkbox" id="remember" />
        <label htmlFor="remember" style={{ marginLeft: "0.5rem" }}>
          remember me
        </label>
        <p>
          forget password?
          <a href="#" onClick={resetPassword}>
            click here
          </a>
        </p>
        <p>
          don't have an account? <Link to="signup">register now</Link>
        </p>
      </form>
    </div>
  );
}

export default Login