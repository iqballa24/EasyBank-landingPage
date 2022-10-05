import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const index = (props) => {
  const className = [];
  className.push(props.className);

  return (
    <>
      <Nav />
      <div className={className.join(" ")}>{props.children}</div>
      <Footer />
    </>
  );
};

export default index;
