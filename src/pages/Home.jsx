import React from "react";
import Layout from "../components/layouts";
import HomeComponents from "../components/home";
import { data } from "../constant/data";

const Home = () => {
  return (
    <Layout className="hero-cover">
      <HomeComponents data={data} />
    </Layout>
  );
};

export default Home;
