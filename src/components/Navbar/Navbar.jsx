import React from "react";
import "./style.css";
const Nav = () => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Tara's World
      </a>
      <button type="button" class="btn btn-outline-light float-right">
        About
      </button>
      <button type="button" class="btn btn-outline-light float-right">
        Portfolio
      </button>
      <button type="button" class="btn btn-outline-light float-right">
        Contact
      </button>
    </nav>
  );
};

export default Nav;
