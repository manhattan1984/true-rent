"use client";
import Link from "next/link";
import React, { useRef } from "react";

const SignUp = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <div className="bg-neutral-50 p-2">
      <div className="max-w-lg mx-auto p-4 shadow m-4 rounded bg-white flex flex-col gap-3">
        <p className="text-center text-md uppercase text-green-500">Sign Up</p>
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
          // onClick={handleSignUp}
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
  );
};

export default SignUp;
