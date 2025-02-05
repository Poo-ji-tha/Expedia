"use client";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // State to track the dropdown menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <header>
        <nav className="bg-white border-gray-200 px-3 lg:px-4 py-3 shadow-md">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
            <div className="flex">
              <a href="https://www.expedia.com" className="flex items-center">
                <img
                  src="https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1&2&6f9ec7db"
                  className="mr-3 h-12 sm:h-8"
                  alt="Expedia Logo"
                />
              </a>
              <p
                className="text-sm font-bold text-gray-900 ml-4 cursor-pointer  items-center hidden lg:flex"
                onClick={toggleDropdown}
              >
                Shop Travel
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 ml-2 transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>

              {/* Dropdown Menu */}
              <div className="relative">
                {isDropdownOpen && (
                  <ul className="absolute left-0 bg-white border border-gray-300 rounded-lg mt-2 shadow-lg w-72 text-sm ">
                    <li className="flex items-center space-x-2 hover:bg-blue-100">
                      {/* Stay icon */}
                      <a href="#" className="block px-4 py-4 text-gray-700 ">
                        <i className="fas fa-bed text-gray-700 text-lg mr-2"></i>{" "}
                        Stay
                      </a>
                    </li>
                    <li className="flex items-center space-x-2 hover:bg-blue-100">
                      {/* Flights icon */}
                      <a href="#" className="block px-4 py-4 text-gray-700 ">
                        {" "}
                        <i className="fas fa-plane-departure text-gray-700 text-lg mr-2"></i>{" "}
                        Flights
                      </a>
                    </li>
                    <li className="flex items-center space-x-2 hover:bg-blue-100">
                      {/* Cars icon */}
                      <a href="#" className="block px-4 py-4 text-gray-700 ">
                        <i className="fas fa-car text-gray-700 text-lg mr-2"></i>{" "}
                        Cars
                      </a>
                    </li>
                    <li className="flex items-center space-x-2 hover:bg-blue-100">
                      {/* Packages icon */}
                      <a href="#" className="block px-4 py-4 text-gray-700 ">
                        <i className="fas fa-gift text-gray-700 text-lg mr-2"></i>{" "}
                        Packages
                      </a>
                    </li>
                    <li className="flex items-center space-x-2 hover:bg-blue-100">
                      {/* Things to do icon */}
                      <a href="#" className="block px-4 py-4 text-gray-700  ">
                        {" "}
                        <i className="fas fa-map-marked-alt text-gray-700 text-lg mr-2"></i>{" "}
                        Things to do
                      </a>
                    </li>
                    <li className="flex items-center space-x-2 hover:bg-blue-100">
                      {/* Cruises icon */}
                      <a href="#" className="block px-4 py-2 text-gray-700 ">
                        <i className="fas fa-ship text-gray-700 text-lg mr-2"></i>{" "}
                        Cruises
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <div className="flex items-center ">
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center p-1 ml-1 text-md text-black rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none"
                aria-controls="mobile-menu-2"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="w-4 h-4 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } justify-between items-center text-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-2 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-sm">
                <li className="flex items-center space-x-2 mb-2 lg:mb-0 text-center lg:text-left">
                  <a
                    href="https://expe.app.link/?~customer_ad_set_name=EXPEDIA-US&~customer_ad_name=DIRECT.REFERRAL&~customer_campaign=BRAND&~customer_placement=BEX-NAVBAR-DESKTOP-CTA-V0DESKTOP&~placement_id=page.Cars&%24desktop_url=https%3A%2F%2Fwww.expedia.com%2Fapp&custom_web_attribute=9d7f0dbd-582e-45e8-ac01-67280889c007&%24canonical_url=https%3A%2F%2Fwww.expedia.com%2FCars"
                    className="flex items-center text-gray-700 font-bold border rounded-full px-4 py-2 hover:bg-blue-100 transition duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-blue-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3a1 1 0 011 1v10.585l3.293-3.292a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L11 14.585V4a1 1 0 011-1zM4 18a1 1 0 011-1h14a1 1 0 011 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Get the app</span>
                  </a>
                </li>

                <li className="flex items-center space-x-2 mb-2 lg:mb-0 text-center lg:text-left transition duration-300 ease-in-out">
                  <a
                    href="#"
                    className="flex items-center text-gray-700 font-bold "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-gray-700 "
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2c.681 0 1.342.069 1.984.2a14.06 14.06 0 00-.453 1.353c-.407 1.455-.757 3.54-.97 5.947H10.44c-.213-2.407-.563-4.492-.97-5.947a14.063 14.063 0 00-.453-1.353A8.02 8.02 0 0112 4zm-2.843.43c.166.46.317.962.452 1.498.424 1.69.787 3.898 1.003 6.272H5.9a8.001 8.001 0 013.257-7.77zM4.017 14a8 8 0 015.592-7.711c.056.157.11.32.162.487.433 1.394.807 3.435 1.029 5.724H4.017zm15.966 0h-6.783c.222-2.289.596-4.33 1.029-5.724.052-.167.106-.33.162-.487A8 8 0 0120 14zm-1.9 2a8 8 0 01-7.14 3.569c-.056-.157-.11-.32-.162-.487-.433-1.394-.807-3.435-1.029-5.724h6.783c-.222 2.289-.596 4.33-1.029 5.724a7.982 7.982 0 00-.162.487zM4.017 14h6.783c-.222 2.289-.596 4.33-1.029 5.724-.052.167-.106.33-.162.487A8 8 0 014.017 14z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 hover:text-blue-700">English</span>
                  </a>
                </li>

                <li className="flex items-center space-x-2 mb-2 lg:mb-0 text-center lg:text-left">
                  <a
                    href="https://www.expedia.com/helpcenter/"
                    className="py-1 px-3 text-gray-700 font-bold rounded-lg hover:text-blue-700"
                  >
                    Support
                  </a>
                </li>

                <li className="flex items-center space-x-2 mb-2 lg:mb-0 text-center lg:text-left">
                  <a
                    href="https://www.expedia.com/trips"
                    className="py-1 px-3 text-gray-700 font-bold rounded-lg hover:text-blue-700"
                  >
                    Trips
                  </a>
                </li>

                <li className="flex items-center space-x-2 mb-2 lg:mb-0 text-center lg:text-left">
                  <a
                    href="#"
                    className="py-1 px-3 text-gray-700 font-bold rounded-lg hover:text-blue-700"
                  >
                    Sign in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
