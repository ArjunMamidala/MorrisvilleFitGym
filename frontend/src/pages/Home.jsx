// src/pages/Home.jsx
import React from "react";
import assets from "../assets/assets";
import Hero from "../components/Hero";
import AboutAndAmenities from "./AboutAndAmenities";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutAndAmenities/>
    </>
  );
}