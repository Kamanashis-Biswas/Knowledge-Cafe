import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import SideBar from "./components/SideBar/SideBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Questions from "./components/Question/Questions";

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);
  const states = {
    time,
    setTime,
    bookmarks,
    setBookmarks,
  };
  return (
    <div className="App">
      <div>
        <Header></Header>
        <div className="main row">
          <div className="blog-container col-md-9">
            <Blogs states={states}></Blogs>
          </div>
          <div className="sidebar col-md-3">
            <SideBar states={states}></SideBar>
          </div>
        </div>
        <ToastContainer></ToastContainer>
        <Questions></Questions>
      </div>
    </div>
  );
}

export default App;
