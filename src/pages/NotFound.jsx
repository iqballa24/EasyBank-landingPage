import React from "react";
import Layout from "../components/layouts";
import ImgConstruction from "../assets/img/construction.svg";

const NotFound = () => {
  return (
    <Layout>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img
          src={ImgConstruction}
          alt="web under construction"
          style={{
            width: "100%",
            maxWidth: "50rem",
          }}
        />
      </div>
    </Layout>
  );
};

export default NotFound;
