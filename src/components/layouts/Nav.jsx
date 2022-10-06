import React, { useState } from "react";
import Logo from "../../assets/img/logo.svg";
import Button from "../Button";
import { navMenu } from "../../constant";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotateZ, setRotateZ] = useState({
    span1: 0,
    span2: 0,
  });
  const [translate, setTranslate] = useState({
    x: {
      span1: 0,
      span2: 0,
    },
    y: {
      span1: 0,
      span2: 0,
    },
  });

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
            setRotateZ((prev) =>
              !isOpen ? { span1: 45, span2: -45 } : { span1: 0, span2: 0 }
            );
            setTranslate((prev) =>
              !isOpen
                ? { x: { span1: 8, span2: 3 }, y: { span1: 2, span2: 2 } }
                : { x: { span1: 0, span2: 0 }, y: { span1: 0, span2: 0 } }
            );
          }}
        >
          <input type="checkbox" id="check" />
          <span
            className="nav-span"
            style={{
              transform: `rotatez(${rotateZ.span1}deg) translate(${translate.x.span1}px, ${translate.y.span1}px)`,
            }}
          ></span>
          <span
            className="nav-span"
            style={{
              transform: `rotatez(${rotateZ.span2}deg) translate(${translate.x.span2}px, ${translate.y.span2}px)`,
            }}
          ></span>
          <span className="nav-span" style={{display: `${isOpen ? 'none' : 'block'}`}}></span>
        </div>
        <div className="nav-button">
          <Button isPrimary>Request Invite</Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
