import { createClient } from "@/utils/supabase-server";
import React from "react";
import HomePage from "./HomePage";

export default async function Home() {
  const supabase = createClient();
  let { data: listings, error } = await supabase.from("listings").select("*");

  return <HomePage houses={listings} />;
}
