import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Add from "./pages/Add";

function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/add", element: <Add /> },
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <>
      <Router>
        <Navbar />
        <App />
      </Router>
    </>
  );
};

export default AppWrapper;
