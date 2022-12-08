import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  const Login = async (email, password) => {
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/login", { email, password })
      .then((res) => {
        console.log(res.data);
        setUser(res.data.user);
        setToken(res.data.token);
        setLoading(false);

        localStorage.setItem("token", token);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, token, Login, error }}>
      {props.children}
    </AuthContext.Provider>
  );
};
