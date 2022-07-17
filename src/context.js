import React, { createContext, useContext, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth";
import {auth} from "./firebase"

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [navbar, setNavbar] = useState(false);
  const [theme, setTheme] = useState("light");
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState("")

  const toggleNavbar = () => {
    setNavbar(!navbar)
  }

  const signupSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      setEmail("");
      setPassword("");
      setMessage('Signup successful')
    })
    .catch(err => {
      setMessage(err.message);
    })
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setMessage("Login successful")
        setEmail("");
        setPassword("");
      })
      .catch(err => {
        setMessage(err.message)
      })
  }

  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("Password reset link sent")
      }).catch(err => {
        setMessage(err.message)
      })
  }

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <AppContext.Provider value={{
      navbar,
      toggleNavbar,
      theme,
      toggleTheme,
      email,
      setEmail,
      password,
      setPassword,
      loginSubmit,
      signupSubmit,
      resetPassword,
      message
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export default AppProvider;