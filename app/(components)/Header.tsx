"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineMenu } from "react-icons/ai";
import { useMenuContext } from "../(context)/MenuContext";
import { useSupabase } from "../(context)/supabase-provider";
import Account from "./Account";

// @ts-ignore
const Header = ({ token, links, id }) => {
  const { supabase } = useSupabase();
  const { showHomeMenu, setShowHomeMenu } = useMenuContext();
  const router = useRouter();
  return (
    <>
      <Toaster />
      <nav className="fixed z-40 w-full flex items-center justify-between p-4 bg-sky-900 text-white top-0">
        <Link className="" href="/">
          <div className="">
            {/* <Image
            alt="Logo"
            src="/true-rent-logos/white-name-transparent.PNG"
            height={30}
            width={20}
            // fill={true}
          /> */}
            <p className="font-bold">TrueRent</p>
          </div>
        </Link>
        <div className="flex gap-4 items-center">
          {token ? (
            <Account id={id} />
          ) : (
            <Link href="/signup">
              <p className="uppercase font-semibold text-green-300 rounded">
                Get Started
              </p>
            </Link>
          )}
          <AiOutlineMenu
            className="text-xl cursor-pointer lg:hidden ml-4"
            onClick={() => {
              setShowHomeMenu(!showHomeMenu);
            }}
          />
          <div className="lg:flex gap-4 hidden">
            {links.map(
              (
                { name, link }: { name: string; link: string },
                index: number
              ) => (
                <Link key={index} href={link} className="uppercase">
                  {name}
                </Link>
              )
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
