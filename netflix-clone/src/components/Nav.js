import React, { useEffect, useState } from "react";
import "../styles/Nav.css";

function Nav(props) {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav--black"}`}>
      <img
        className="nav__icon"
        alt="netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
      />
      <img
        className="nav__icon nav__icon--user"
        alt="user"
        src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
      />
    </div>
  );
}

export default Nav;
