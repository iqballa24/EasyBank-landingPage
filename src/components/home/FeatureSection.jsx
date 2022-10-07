import React from "react";

const FeatureSection = ({ data }) => {
  return (
    <div className="feature-section">
      <div className="container flex flex-column">
        <div className="feature-section-title">
          <h1 className="text-xl">Why choose EasyBank?</h1>
          <p className="text-base">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="flex flex-wrap feature-section-card">
          {data.featureSection?.feature?.map((item, index) => (
            <div className="w-full w-md-6 w-lg-3 card-feature" key={index}>
              <img src={item.icon} alt={item.name}/>
              <h1 className="text-lg">{item.name}</h1>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
