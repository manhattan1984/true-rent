import { createClient } from "@/utils/supabase-server";
import React from "react";
import SignUp from "./SignUp";

const page = async () => {
  const supabase = createClient();

  let { data: account_types, error } = await supabase
    .from("account_types")
    .select("name");

  return <SignUp accountTypes={account_types} />;
};

export default page;
