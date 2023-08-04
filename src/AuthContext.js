import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // Add user state

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  // Provide the handleLogin function as well
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
