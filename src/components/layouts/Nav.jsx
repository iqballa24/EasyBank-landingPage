import React, { useState } from "react";
import Logo from "../../assets/img/logo.svg";
import Button from "../Button";
import { navMenu } from "../../constant";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [widthSpan, setWidthSpan] = useState({ span1: 100, span3: 100 });

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <NavLink to="/">
            <img className="img-fluid logo" src={Logo} alt="logo" />
          </NavLink>
        </div>
        <ul className={`nav-menus ${isOpen ? "show" : ""}`}>
          {navMenu.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "nav-menus-item active" : "nav-menus-item"
                }
              >
                {item.name}
              </NavLink>
            );
          })}
        </ul>
        <div
          className="nav-hamburger"
          onClick={() => {
            setIsOpen((prev) => !prev);
            setWidthSpan((prev) =>
              prev.span1 == "50"
                ? { span1: 100, span3: 100 }
                : { span1: 50, span3: 75 }
            );
          }}
        >
          <input type="checkbox" id="check" />
          <span
            className="nav-span"
            style={{ width: `${widthSpan.span1}%` }}
          ></span>
          <span className="nav-span"></span>
          <span
            className="nav-span"
            style={{ width: `${widthSpan.span3}%` }}
          ></span>
        </div>
        <div className="nav-button">
          <Button isPrimary>Request Invite</Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
