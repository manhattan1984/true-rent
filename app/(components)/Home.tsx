import Image from "next/image";
import React from "react";
import { BsBookmark } from "react-icons/bs";

const Home = ({
  image_url,
  price,
  description,
  created_at,
  no_of_rooms,
  state,
  town,
  area,
}: {
  image_url: string;
  price: number;
  description: string;
  created_at: Date;
  no_of_rooms: number;
  state: string;
  town: string;
  area: string;
}) => {
  return (
    <div className="w-5/6 mx-auto flex flex-col gap-3 p-2 bg-white rounded shadow">
      <div className="relative h-40 w-full">
        <Image
          className="rounded-md"
          alt={description}
          src={image_url}
          fill={true}
        />
      </div>
      <div className="text-gray-500 m-2">
        <div className="flex items-center justify-between">
          <p className="font-bold text-black text-2xl mb-1">
            ${price}
            <span className="font-light text-gray-500 text-base">
              / year
            </span>{" "}
          </p>
          <BsBookmark className="font-bold cursor-pointer" />
        </div>
        <div className="">
          <p className="font-semibold">{area}</p>
          <div className="flex gap-2 text-sm">
            <p>
              {town}, {state}
            </p>
          </div>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
