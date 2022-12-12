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
      const res = await axios.get("http://localhost:5000/api/v1/all");
      setPosts(res.data.travelExperiences);
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
      setPosts([res.data.travelExperience, ...posts]);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const getUserPost = async (id) => {
      if (user !== null) {
        setLoading(true);
        try {
          const res = await axios.get(
            `http://localhost:5000/api/v1/find/${id}`
          );
          setUserPosts(res.data.travelExperiences);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }
    };
    getUserPost(user?._id);
  }, []);

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <PostContext.Provider
      value={{
        posts,
        loading,
        userPosts,
        createPost,
        error,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
