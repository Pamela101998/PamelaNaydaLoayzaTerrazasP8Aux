import {createContext, useState, useEffect} from "react";

const AuthContext = createContext ({
    isLoggedIn: false,
    onLogin: (email, password) => {},
    onLogout: () => {},
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
    const storedLoggedInfo = localStorage.getItem("isLoggedIn");
    if (+storedLoggedInfo === 1) {
      setIsLoggedIn(true);
  } 
}, []);

  const loginHandler = (email, password) => {
    // console.log("Login in...");
    localStorage.setItem("isLoggedIn", 1);
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    // console.log("pame");
    // console.log(isLoggedIn);
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
};
  return (
       <AuthContext.Provider 
       value={{
        isLoggedIn,
        onLogin:loginHandler,
        onLogout: logoutHandler,
       }}
    >
        {props.children}
        </AuthContext.Provider>
  );
};

export default AuthContext; 
