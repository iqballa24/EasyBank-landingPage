import React from "react";
import Layout from "../components/layouts";
import MockUpsImg from "../assets/img/image-mockups.png";
import Button from "../components/Button";
import HomeComponents from "../components/home";
import { data } from "../constant/data";

const Home = () => {
  
  return (
    <Layout className="container hero-cover">
      <HomeComponents data={data} />
    </Layout>
  );
};

export default Home;
