import React, { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "./img/filmfix-high-resolution-logo-color-on-transparent-background.png";
import search from "./img/search-svgrepo-com.svg";
import bell from "./img/notification-svgrepo-com.svg";
import icon from "./img/filmfix-website-favicon-color.png";
import AddNew from "./AddNew.jsx";
import { Link } from "react-router-dom";
const NavBar = ({ add, setSearch }) => {
  const [scroll, setScroll] = useState(false);
  const [searchIcon, setsearchIcon] = useState(false);
  const [Show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else setScroll(false);
    });
  }, []);
  return (
    <header className={`main-header ${scroll && "nav_black"}`}>
      <div style={{ marginLeft: "40px" }} className="logo-brand">
        <a id="logoBtn" href="#home">
          {" "}
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="main-menu">
        <ul>
          <Link to="/">
            <li style={{ fontWeight: "700" }}>Home</li>
          </Link>
          <Link to="/tvShows">
            {" "}
            <li>TV Shows</li>
          </Link>
          <Link to="/movies">
            {" "}
            <li>Movies</li>
          </Link>
          <Link to="/myList">
            <li>My List</li>
          </Link>
          <li>
            {" "}
            <button id="addBtn" onClick={() => setShow(true)}>
              Add Movie
            </button>
            {Show && <AddNew setShow={setShow} add={add} />}
          </li>
        </ul>
      </div>
      <div className="secondary-header">
        {searchIcon && (
          <input
            type={Text}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        )}
        <img
          onClick={() => setsearchIcon(!searchIcon)}
          src={search}
          alt="search"
        />
        <img src={bell} alt="bell" />
        <img id="icon" src={icon} alt="user" />
      </div>
    </header>
  );
};

export default NavBar;
