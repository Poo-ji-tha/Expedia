export default function CarRentalTips() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6">
        Top Tips to Consider When Booking a Car Rental
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Left Column */}
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold">
              How to book a car rental for your next trip?
            </h2>
            <p className="text-gray-700">
              To start the easy process of booking car rentals through Expedia,
              simply enter your desired location along with the dates and times
              for pickup and drop-off. Alternatively, browse our selection of
              popular rental car types and destinations if you need some
              inspiration. Whether you’re looking for a
              <a href="#" className="text-blue-600 hover:underline">
                {" "}
                convertible car rental
              </a>{" "}
              for you and your partner or a{" "}
              <a href="#" className="text-blue-600 hover:underline">
                passenger van rental
              </a>{" "}
              for the whole family, we have a wide variety of rent-a-car options
              available that can have you riding with efficiency and style.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              What kind of cars are available for rent?
            </h2>
            <p className="text-gray-700">
              An{" "}
              <a href="#" className="text-blue-600 hover:underline">
                SUV car rental in Los Angeles
              </a>
              , for example, can be a great option for those in town on business
              or just wanting to explore the city in comfort and style. Opt for
              a{" "}
              <a href="#" className="text-blue-600 hover:underline">
                convertible car rental in Fort Lauderdale
              </a>
              if you’re traveling for the sunshine. Those venturing to LAS can
              go with a
              <a href="#" className="text-blue-600 hover:underline">
                {" "}
                luxury car in Las Vegas
              </a>{" "}
              for a premium experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              How much does it cost to rent a car?
            </h2>
            <p className="text-gray-700">
              The cost of rental cars varies widely based on several factors,
              like the class of car selected and the location where you’re
              renting. A{" "}
              <a href="#" className="text-blue-600 hover:underline">
                one-way car rental
              </a>
              tends to be a bit more expensive than a round-trip car rental.
              More luxurious cars tend to cost more, and busier areas are
              typically more expensive to rent in. Of course, travelers may opt
              for certain add-ons or protection policies that can also increase
              costs.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">
              How much does it cost to rent a car?
            </h2>
            <p className="text-gray-700">
              The cost of rental cars varies widely based on several factors,
              like the class of car selected and the location where you’re
              renting. A{" "}
              <a href="#" className="text-blue-600 hover:underline">
                one-way car rental
              </a>
              tends to be a bit more expensive than a round-trip car rental.
              More luxurious cars tend to cost more, and busier areas are
              typically more expensive to rent in. Of course, travelers may opt
              for certain add-ons or protection policies that can also increase
              costs.
            </p>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold">
              How do I find a cheap car rental?
            </h2>
            <p className="text-gray-700">
              Finding a cheap car rental requires travelers to take advantage of
              search filters and pricing trends. Within your search, apply
              filters for your budgetary limits in the “total price” section of
              the filter list. Additionally, pay attention to the other filters,
              as they come with low-price limits for each.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              How do I get a good deal on a rental car?
            </h2>
            <p className="text-gray-700">
              The easiest way to get a good deal on a rental car is to use our
              filters. At the top of the filter list, you'll find a section
              featuring our best car rental offers. Check the filter for "Great
              Deal," and your search results will be filled with specials.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              Do I need insurance to rent a car?
            </h2>
            <p className="text-gray-700">
              No, you don’t need personal auto insurance to rent a car in most
              cases. You will, however, be required to purchase some insurance
              to cover the duration of the rental.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              Can I rent a car with a debit card?
            </h2>
            <p className="text-gray-700">
              Yes, many rental car companies do allow travelers to rent cars
              with a debit card. A debit card incurs greater risk to the
              company, however, so it’s not uncommon for them to make additional
              checks.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
