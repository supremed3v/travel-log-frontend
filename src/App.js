import "./App.css";
import "swiper/css/bundle";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Add from "./pages/Add";
import LoginSignup from "./pages/LoginSignup";
import { AuthContextProvider } from "./context/AuthContext";
import { PostContextProvider } from "./context/PostContext";
import ExperienceDetails from "./pages/ExperienceDetails";

function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/add", element: <Add /> },
    { path: "/login", element: <LoginSignup /> },
    { path: "/travel-log/:id", element: <ExperienceDetails /> },
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <>
      <AuthContextProvider>
        <PostContextProvider>
          <Router>
            <Navbar />
            <App />
          </Router>
        </PostContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default AppWrapper;
