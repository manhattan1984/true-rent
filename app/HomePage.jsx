import React from "react";
import Home from "./(components)/Home";

const HomePage = ({ houses }) => {
  return (
    <div className="">
      <div className="w-5/6 mx-auto">
        <input className="w-full p-2" placeholder="Search Rooms, Area, Town" />
      </div>
      <div className="w-full md:w-11/12 lg:w-5/6 flex flex-col mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
        {houses.map((house, index) => (
          <Home {...house} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
