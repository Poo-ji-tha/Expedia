import React from "react";
import Header from "./components/Header"; // Correct import path;
import Tab from "./components/Tab";
import PopularCars from "./components/PopularCars";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Footer";
import CarRentalTips from "./components/Tips";
export default function Home() {
  return (
    <div>
      <Header />
      <Tab />
      <PopularCars />
      <CarRentalTips />
      <Footer />
    </div>
  );
}
