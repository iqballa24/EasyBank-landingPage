import React from "react";
import Button from "../Button";
import MockUpsImg from "../../assets/img/image-mockups.png";

const HeroSection = ({data}) => {
  return (
    <div className="container hero-section">
      <div className="w-full w-md-6 hero-section-title">
        <h1 className="text-xxl">{data.heroSection.title}</h1>
        <p className="text-base">{data.heroSection.text}</p>
        <Button isPrimary>Request Invite</Button>
      </div>
      <div className="w-full w-md-6 hero-section-image">
        <img src={MockUpsImg} alt="hero EasyBank"/>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
