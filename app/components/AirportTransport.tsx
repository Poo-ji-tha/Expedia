import React, { useState } from "react";

interface SearchResult {
  airport: string;
  hotel: string;
  travelers: number;
  flightDate: string;
  flightTime: string;
}

const AirportTransport = () => {
  const [tripType, setTripType] = useState("airportToHotel");
  const [searchData, setSearchData] = useState({
    airport: "",
    hotel: "",
    travelers: 1,
    flightDate: "",
    flightTime: "",
  });
  const [results, setResults] = useState<SearchResult[]>([]);
  const [noRecords, setNoRecords] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    const dummyData: SearchResult[] = [
      {
        airport: "JFK",
        hotel: "Hilton",
        travelers: 2,
        flightDate: "Feb 19",
        flightTime: "10:30am",
      },
    ];

    const filteredData = dummyData.filter(
      (item) =>
        item.airport === searchData.airport &&
        item.hotel === searchData.hotel &&
        item.flightDate === searchData.flightDate
    );

    if (filteredData.length > 0) {
      setResults(filteredData);
      setNoRecords(false);
    } else {
      setResults([]);
      setNoRecords(true);
    }
  };

  return (
    <div className=" p-6">
      <div className="flex space-x-2 mb-4">
        {[
          { label: "Airport to hotel", value: "airportToHotel" },
          { label: "Hotel to airport", value: "hotelToAirport" },
          { label: "Roundtrip", value: "roundTrip" },
        ].map((option) => (
          <button
            key={option.value}
            onClick={() => setTripType(option.value)}
            className={`px-4 py-2 rounded-full border ${
              tripType === option.value
                ? "bg-blue-600 text-white"
                : "bg-white border-gray-300"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="airport"
          placeholder="Airport"
          value={searchData.airport}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="hotel"
          placeholder="Hotel"
          value={searchData.hotel}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <input
          type="number"
          name="travelers"
          min="1"
          value={searchData.travelers}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="date"
          name="flightDate"
          value={searchData.flightDate}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="time"
          name="flightTime"
          value={searchData.flightTime}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-6 py-2 rounded-full"
      >
        Search
      </button>

      <div className="mt-6">
        {results.length > 0 ? (
          <ul className="border p-4 mt-4">
            {results.map((result, index) => (
              <li key={index} className="p-2 border-b last:border-0">
                {`${result.airport} → ${result.hotel} | Travelers: ${result.travelers} | Date: ${result.flightDate} | Time: ${result.flightTime}`}
              </li>
            ))}
          </ul>
        ) : (
          noRecords && (
            <p className="text-red-500 mt-4">No such records found</p>
          )
        )}
      </div>
    </div>
  );
};

export default AirportTransport;
