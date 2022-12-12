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
      })
      .catch((error) => {
        setLoading(false);
        setError(error.response.data.message);
      });
  };

  const Logout = () => {
    setLoading(true);
    axios.post("http://localhost:5000/api/v1/logout");
    setUser(null);
    setToken(null);
  };

  const signUp = (email, password, name) => {
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/register", {
        email,
        password,
        name,
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data.user);
        setToken(res.data.token);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err);
      });
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, token, Login, error, Logout, signUp }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
