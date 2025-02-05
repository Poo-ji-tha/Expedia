import React, { useState } from "react";

interface SearchResult {
  pickup: string;
  dropoff: string;
  travelers: number;
  pickupDate: string;
  pickupTime: string;
  dropoffTime: string;
}

const RentalCars = () => {
  const [searchData, setSearchData] = useState({
    pickup: "",
    dropoff: "",
    travelers: 1,
    pickupDate: "",
    pickupTime: "",
    dropoffTime: "",
  });
  const [results, setResults] = useState<SearchResult[]>([]);
  const [noRecords, setNoRecords] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    const dummyData: SearchResult[] = [
      {
        pickup: "New York, USA",
        dropoff: "Los Angeles, USA",
        travelers: 2,
        pickupDate: "2025-02-19",
        pickupTime: "10:30",
        dropoffTime: "14:30",
      },
      {
        pickup: "San Francisco, USA",
        dropoff: "Seattle, USA",
        travelers: 1,
        pickupDate: "2025-03-01",
        pickupTime: "08:00",
        dropoffTime: "12:00",
      },
      {
        pickup: "Boston, USA",
        dropoff: "Chicago, USA",
        travelers: 3,
        pickupDate: "2025-04-15",
        pickupTime: "09:45",
        dropoffTime: "13:30",
      },
    ];

    const filteredData = dummyData.filter(
      (item) =>
        item.pickup.toLowerCase().includes(searchData.pickup.toLowerCase()) &&
        item.dropoff.toLowerCase().includes(searchData.dropoff.toLowerCase()) &&
        item.pickupDate === searchData.pickupDate
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
    <div className="my-4">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="pickup"
          placeholder="Pickup Location"
          value={searchData.pickup}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="dropoff"
          placeholder="Drop-off Location"
          value={searchData.dropoff}
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
          name="pickupDate"
          value={searchData.pickupDate}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="time"
          name="pickupTime"
          value={searchData.pickupTime}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="time"
          name="dropoffTime"
          value={searchData.dropoffTime}
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
              <li
                key={index}
                className="p-2 border-b text-blue-700 last:border-0"
              >
                {`${result.pickup} → ${result.dropoff} | Travelers: ${result.travelers} | Pickup Date: ${result.pickupDate} | Pickup Time: ${result.pickupTime} | Dropoff Time: ${result.dropoffTime}`}
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

export default RentalCars;
