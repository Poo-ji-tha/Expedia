"use client";
import React, { useState } from "react";
import RentalCars from "./RentalCars";
import AirportTransport from "./AirportTransport"; // Uncomment to import AirportTransport component

const Tab = () => {
  const [activeTab, setActiveTab] = useState("rental"); // Track active tab

  return (
    <div className="my-4 lg:py-4 lg:mx-80 py-0 mx-4">
      <h1 className="text-3xl font-bold mb-2">Search Cars</h1>
      <div className="border-b border-gray-200 shadow-md">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500">
          {/* Rental Cars Tab */}
          <li className="me-2">
            <button
              onClick={() => setActiveTab("rental")}
              className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg transition-all ${
                activeTab === "rental"
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-500 border-transparent hover:text-balance hover:border-black"
              }`}
            >
              Rental Cars
            </button>
          </li>

          {/* Airport Transportation Tab */}
          <li className="me-2">
            <button
              onClick={() => setActiveTab("airport")} // Fix: Change "rental" to "airport"
              className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg transition-all ${
                activeTab === "airport"
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-500 border-transparent hover:text-black hover:border-black"
              }`}
            >
              Airport Transportation
            </button>
          </li>
        </ul>
      </div>

      {/* Dynamic Component Rendering */}
      <div className="mt-4">
        {activeTab === "rental" ? <RentalCars /> : <AirportTransport />}
      </div>
    </div>
  );
};

export default Tab;
