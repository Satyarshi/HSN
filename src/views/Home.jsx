import React from "react";
import Hero from "../components/home/Hero";
import SearchBox from "../components/home/SearchBox";
import HsnInfo from "../components/home/HsnInfo";
import SacStructure from "../components/home/SacStructure";

const Home = () => {
  return (
    <div className="main">
      <Hero />
      <SearchBox />
      <HsnInfo />
      <SacStructure />
    </div>
  );
};

export default Home;
