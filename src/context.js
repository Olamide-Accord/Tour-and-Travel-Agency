import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [navbar, setNavbar] = useState(false);
  const [searchbar, setSearchbar] = useState(false);
  const [login, setLogin] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar)
  }
  const openSearchbar = () => {
    setSearchbar(true)
  }
  const closeSearchbar = () => {
    setSearchbar(false)
  }
  const openLogin = () => {
    setLogin(true)
  }
  const closeLogin = () => {
    setLogin(false)
  }
  return (
    <AppContext.Provider value={{
      navbar,
      toggleNavbar,
      searchbar,
      openSearchbar,
      closeSearchbar,
      login,
      openLogin,
      closeLogin
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export default AppProvider;