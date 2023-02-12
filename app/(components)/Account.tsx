"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { MdAccountCircle } from "react-icons/md";
import { useSupabase } from "../(context)/supabase-provider";

const Account = ({ id }: { id: string }) => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const { supabase } = useSupabase();
  const router = useRouter();
  const logOut = async () => {
    await supabase.auth.signOut();
    toast.success("Sign Out Successful");
    router.push("/");
  };
  return (
    <>
      <Toaster />
      <div className="">
        <MdAccountCircle
          onClick={() => {
            setShowAccountMenu(!showAccountMenu);
          }}
          className="text-2xl cursor-pointer"
        />
        <div
          className={`absolute mt-2 top-10 right-10 ease-in-out duration-300 
        py-2 px-6 rounded transition-all
        bg-white shadow text-sky-900 flex flex-col items-end
        ${showAccountMenu ? "scale-100" : "scale-0"}
          `}
        >
          <Link href={`/profile/${id}`}>My Profile</Link>
          <button onClick={logOut}>Log Out</button>
        </div>
      </div>
    </>
  );
};

export default Account;
