import React from "react";
import Logo from "../../assets/img/logo-white.svg";
import Button from "../Button";
import { NavLink } from "react-router-dom";
import { footerMenu, socialMedia } from "../../constant";

const Footer = () => {
  return (
    <footer className="footer" role="footer">
      <div className="flex flex-wrap w-full">
        <div className="w-full w-md-3 flex flex-column">
          <img src={Logo} style={{ width: `13.9rem` }} alt="logo"/>
          <ul className="social-media">
            {socialMedia.map((item, index) => {
              return (
                <li className="item-social-media" key={index}>
                  <a href="#">
                    <img src={item.url} alt={item.name} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full w-md-2">
          <div className="nav-menu">
            {footerMenu.map(
              (item, index) =>
                index < 3 && (
                  <NavLink to={item.path} key={index} className="nav-item">
                    {item.name}
                  </NavLink>
                )
            )}
          </div>
        </div>
        <div className="w-full w-md-3">
          <div className="nav-menu">
            {footerMenu.map(
              (item, index) =>
                index > 2 && (
                  <NavLink to={item.path} key={index} className="nav-item">
                    {item.name}
                  </NavLink>
                )
            )}
          </div>
        </div>
        <div className="w-full w-md-4 copy-right">
          <Button isPrimary>Request Invite</Button>
          <p className="text-xs">© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
