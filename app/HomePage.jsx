import React from "react";
import Home from "./(components)/Home";

const HomePage = ({ houses }) => {
  return (
    <div className="flex flex-col gap-2 pt-2">
      {houses.map((house, index) => (
        <Home {...house} key={index} />
      ))}
    </div>
  );
};

export default HomePage;
