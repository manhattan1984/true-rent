"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useSupabase } from "../(context)/supabase-provider";

const SignUp = ({ accountTypes }) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const accountTypeRef = useRef();

  const router = useRouter();
  const { supabase } = useSupabase();

  const handleSignUp = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const first_name = firstNameRef.current.value;
    const last_name = lastNameRef.current.value;
    const phone_number = phoneNumberRef.current.value;
    const account_type = accountTypeRef.current.value;

    if (
      !(
        email &&
        password &&
        first_name &&
        last_name &&
        phone_number &&
        account_type
      )
    ) {
      toast.error("Please Fill The Form Completely");
      return;
    }

    const {
      data: { user },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name,
          last_name,
          phone_number,
          email,
          account_type,
        },
      },
    });

    if (user) {
      toast.success("Sign Up Successful, Check email for verification");
      router.push("/signin");
      return;
    }
    toast.error(`Sign Up Error, ${error}`);
  };
  return (
    <>
      <Toaster />
      <div className="bg-neutral-50 p-2">
        <div className="max-w-lg mx-auto p-4 shadow m-4 rounded bg-white flex flex-col gap-3">
          <p className="text-center text-md uppercase text-green-500">
            Sign Up
          </p>
          <div className="text-center my-2">
            <p className="text-3xl text-sky-900 font-bold">TrueRent</p>
          </div>
          <div className="flex gap-2">
            <div className="w-full">
              <label className="capitalize mb-2 text-sm">first name</label>
              <input
                id="firstname"
                required
                ref={firstNameRef}
                placeholder="First name"
                className="w-full border p-2 rounded text-sm"
                type="text"
              />
            </div>
            <div className="w-full">
              <label className="capitalize mb-2 text-sm">last name</label>
              <input
                required
                ref={lastNameRef}
                placeholder="Last name"
                className="w-full border p-2 rounded text-sm"
                type="text"
              />
            </div>
          </div>
          <div className="">
            <label className="capitalize mb-2 text-sm">phone no.</label>
            <input
              required
              ref={phoneNumberRef}
              placeholder="Enter your Phone No."
              className="border w-full p-2 rounded text-sm"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="capitalize mb-2 text-sm">Account Type</label>
            <select ref={accountTypeRef}>
              {accountTypes.map(({ name }) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <label className="capitalize mb-2 text-sm">Email address</label>
            <input
              required
              ref={emailRef}
              placeholder="Enter your email"
              className="border w-full p-2 rounded text-sm"
              type="text"
            />
          </div>

          <div className="">
            <label className="capitalize mb-2 text-sm">Password</label>
            <input
              required
              ref={passwordRef}
              placeholder="Password"
              className="border w-full p-2 rounded text-sm"
              type="password"
            />
          </div>

          <button
            type="submit"
            onClick={handleSignUp}
            className="bg-sky-800 text-white p-2 uppercase"
          >
            create account
          </button>
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/signin" className="text-green-500">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
