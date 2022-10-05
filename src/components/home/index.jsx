import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import LatestArticleSection from "./LatestArticleSection";

const index = (props) => {
  return (
    <>
      <HeroSection data={props.data} />
      <FeatureSection data={props.data} />
      <LatestArticleSection data={props.data} />
    </>
  );
};

export default React.memo(index);
