import React from "react";
import Hero from "../components/ifsc/Hero";
import IfscStructure from "../components/ifsc/IfscStructure";
import IfscCode from "../components/ifsc/IfscCode";

const Ifsc = () => {
  return (
    <div className="main">
      <Hero />
      <IfscCode />
      <IfscStructure />
    </div>
  );
};

export default Ifsc;
