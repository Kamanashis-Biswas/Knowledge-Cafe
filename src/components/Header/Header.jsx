import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header d-flex justify-content-between">
      <h2 className="fs-1 fw-bold">Signature Cafe</h2>
      <img
        src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80"
        alt=""
      />
    </nav>
  );
};

export default Header;
