import React from "react";
import Hero from "../components/hsn/Hero";
import SearchBox from "../components/hsn/SearchBox";
import HsnInfo from "../components/hsn/HsnInfo";
import SacStructure from "../components/hsn/SacStructure";

const Hsn = () => {
  return (
    <div className="main">
      <Hero />
      <SearchBox />
      <HsnInfo />
      <SacStructure />
    </div>
  );
};

export default Hsn;
