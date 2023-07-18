import React from "react";
import AboutHeader from "../components/aboutUs/header";
import Discover from "../components/aboutUs/discover";
import Team from "../components/aboutUs/team";
import Catering from "../components/aboutUs/catering";

export default function AboutUs() {
  return (
    <div>
      <AboutHeader />
      <Discover />
      <Team />
      <Catering />
    </div>
  );
}
