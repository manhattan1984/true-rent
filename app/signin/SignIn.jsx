"use client";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useSupabase } from "../(context)/supabase-provider";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const router = useRouter();

  const { supabase } = useSupabase();

  const handleSignIn = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!(email && password)) {
      toast.error("Enter Email and Password");
      return;
    }

    const { data: user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error) {
      toast.success("Sign In Successful");
      router.push("/");
      return;
    }

    toast.error(`Failed to sign in, ${error}`);
  };
  return (
    <>
      <Toaster />
      <div className="bg-neutral-50 flex items-center h-[70vh]">
        <div className="max-w-md mx-auto p-4 shadow m-4 rounded bg-white flex flex-col gap-3 w-full">
          <p className="text-center text-md text-green-500 uppercase">
            Sign In
          </p>
          <div className="text-center my-2">
            <p className="text-3xl font-bold text-sky-900">TrueRent</p>
          </div>

          <div className="">
            <p className="capitalize mb-2 text-sm">Email address</p>
            <input
              ref={emailRef}
              placeholder="Enter your email"
              className="border w-full p-2 rounded text-sm"
              type="text"
            />
          </div>

          <div className="">
            <p className="capitalize mb-2 text-sm">Password</p>
            <input
              ref={passwordRef}
              placeholder="Password"
              className="border w-full p-2 rounded text-sm"
              type="password"
            />
          </div>

          <div className="w-full flex">
            <Link
              className="text-green-500 text-xs w-full text-right"
              href="/forgot-password"
            >
              Forgot Your Password?
            </Link>
          </div>

          <button
            onClick={handleSignIn}
            className="bg-sky-900 text-white p-2 uppercase"
          >
            Sign In
          </button>
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/signup" className="text-green-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
