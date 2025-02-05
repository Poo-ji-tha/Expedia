import Image from "next/image";
import React from "react";
import Header from "./components/Header"; // Correct import path;
import Tab from "./components/Tab";
import RentalCars from "./components/RentalCars";
import PopularCars from "./components/PopularCars";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Footer";
import CarRentalTips from "./components/Tips";
export default function Home() {
  return (
    <div className=" lg:py-4 lg:mx-20 py-0 mx-4">
      <Header />
      <Tab />
      <PopularCars />
      <CarRentalTips />
      <Footer />
    </div>
  );
}
