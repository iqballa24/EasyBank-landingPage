import React from "react";
import HeroSection from "./HeroSection";

const index = (props) => {
  return <HeroSection data={props.data} />;
};

export default React.memo(index);
