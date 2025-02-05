import React from "react";
import Image from "next/image";

// Import images
import suvImage from "../images/suv.png"; // ✅ Importing images
import vanImage from "../images/passenger-van.png";
import luxuryImage from "../images/luxury.png";
import pickupImage from "../images/luxury-car.png";
import economyImage from "../images/luxury-car.png";
const carCategories = [
  { name: "SUV Rental", image: suvImage },
  { name: "Passenger Van Rental", image: vanImage },
  { name: "Convertible/Luxury Car Rental", image: luxuryImage },
  { name: "Pickup Truck", image: pickupImage },
  { name: "Economy Car", image: economyImage },
  { name: "Economy Car", image: economyImage },
];

const PopularCars = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Popular Car Categories
      </h2>

      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {carCategories.map((car, index) => (
          <div
            key={index}
            className="relative w-52 h-56 rounded-3xl overflow-hidden shadow-lg flex-shrink-0"
          >
            {/* Car Image with Grayscale */}
            <Image
              src={car.image}
              alt={car.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg  brightness-75"
            />

            {/* Centered Category Name */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-lg font-bold  px-4 py-2 rounded-md">
                {car.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl mt-3 font-bold text-gray-900 mb-4">
        Trending Rent a Car Destination
      </h2>

      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {carCategories.map((car, index) => (
          <div
            key={index}
            className="relative w-52 h-56 rounded-3xl overflow-hidden shadow-lg flex-shrink-0"
          >
            {/* Car Image with Grayscale */}
            <Image
              src={car.image}
              alt={car.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg  brightness-75"
            />

            {/* Centered Category Name */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-lg font-bold  px-4 py-2 rounded-md">
                {car.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCars;
