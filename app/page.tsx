import React from "react";
import HomePage from "./HomePage";

export default function Home() {
  const houses = [
    {
      image:
        "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      price: 100,
      description: `Apartments in Choba, Port Harcourt. 4 bedroom flat`,
    },
    {
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      price: 300,
      description: `Apartments in Alakahia, Port Harcourt. 3 bedroom flat`,
    },
    {
      image:
        "https://images.unsplash.com/photo-1524061614234-8449637d36ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      price: 300,
      description: `Apartments in Rumosi, Port Harcourt. 3 bedroom flat`,
    },
  ];
  return <HomePage houses={houses} />;
}
