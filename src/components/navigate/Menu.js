import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "20px 30px",
        backgroundColor: "#e4e4e4",
      }}
    >
      <NavLink to=".">
        <p
          style={{
            color: "#F3F2EE",
            fontSize: "1.1rem",
            padding: "0.5rem",
            border: "1px solid #85B6B2",
            borderRadius: "8px",
            backgroundColor: "#B8A191",
          }}
        >
          Task-Maker
        </p>
      </NavLink>
      <NavLink
        style={{
          color: "#F3F2EE",
          fontSize: "1.1rem",
          padding: "0.5rem",
          border: "1px solid #85B6B2",
          borderRadius: "8px",
          backgroundColor: "#B8A191",
        }}
        to="question"
      >
        <p>Questions</p>
      </NavLink>
    </div>
  );
};

export default Menu;
