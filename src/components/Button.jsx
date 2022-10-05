import React from "react";

const Button = (props) => {
  const className = ["btn"];
  className.push(props.className);

  if (props.isPrimary) className.push("btn-primary");

  return <button className={className.join(" ")}>{props.children}</button>;
};

export default Button;
