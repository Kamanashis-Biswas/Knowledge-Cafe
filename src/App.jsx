import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <Header></Header>
        <div className="main row">
          <div className="blog-container col-md-8">
            <Blogs></Blogs>
          </div>
          <div className="sidebar col-md-4">
            <SideBar></SideBar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
