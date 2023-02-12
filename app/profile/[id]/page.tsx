import { createClient } from "@/utils/supabase-server";
import React from "react";
import Profile from "./Profile";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const supabase = createClient();

  let { data: profiles, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  return <Profile {...profiles} />;
};

export default page;
