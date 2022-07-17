import React from 'react'
import Messages from '../../components/Messages';
// import { Link } from "react-router-dom";
import { useGlobalContext } from '../../context';

const Signup = () => {
  const {email, setEmail, password, setPassword, signupSubmit,
  message} = useGlobalContext()
  return (
    <div className="login-form-container">
      <form onSubmit={signupSubmit}>
        <h3>Sign up</h3>
        {message && <Messages/>}
        <input 
          type="email" 
          className="box" placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <input 
          type="password" 
          className="box" placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <input type="submit" className="btn" value="sign up" />
      </form>
    </div>
  );
}

export default Signup