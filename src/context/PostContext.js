import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
export const PostContext = createContext();

export const PostContextProvider = (props) => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  const getAllPost = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/v1/allExp");
      setPosts(res.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const createPost = async (post) => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/v1/addExp", post);
      setPosts([...posts, res.data]);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const getUserPost = async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/find/${id}`);
      setUserPosts(res.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  //   useEffect(() => {
  //     if (user !== null) {
  //       getUserPost(user._id);
  //     }
  //   }, [user]);

  return (
    <PostContext.Provider value={{ posts, loading, userPosts, createPost }}>
      {props.children}
    </PostContext.Provider>
  );
};
