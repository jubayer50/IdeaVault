"use client";

import { RiArrowDropDownLine } from "react-icons/ri";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { CiLogout } from "react-icons/ci";
import MyNavLink from "./MyNavLink";
import { authClient } from "@/lib/auth-client";
import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const links = (
    <>
      <MyNavLink href={"/"}>Home</MyNavLink>
      <MyNavLink href={"/ideas"}>Ideas</MyNavLink>
      <MyNavLink href={"/add-idea"}>Add Ideas</MyNavLink>
      <MyNavLink href={"/my-ideas"}>My Ideas</MyNavLink>
      <MyNavLink href={"/my-interactions"}>My Interactions</MyNavLink>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6 max-w-340 mx-auto">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <Link href={"/"} className="flex items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-black text-[#001931]">
              Idea<span className="text-[#469165]">Vault</span>
            </h2>
          </Link>
        </div>

        <ul className="hidden items-center gap-3.5 lg:gap-5 md:flex">
          {links}
        </ul>

        {user ? (
          <div
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex relative items-center gap-2 px-3 py-1.5  hover:bg-white transition duration-300 rounded-md"
          >
            <Avatar>
              <Avatar.Image
                alt={user?.name}
                src={user?.image}
                referrerPolicy="no"
                className="object-cover aspect-square"
              />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>

            <RiArrowDropDownLine
              className={`${showUserMenu ? "rotate-180 transition duration-300" : ""} text-2xl`}
            />

            {showUserMenu && (
              <div className="absolute top-14.5 right-0 space-y-1 px-3 py-2 bg-gray-100 rounded-md border shadow-sm w-40">
                <Link href={"/profile"}>
                  <p className="hover:bg-gray-200 px-2 py-1 rounded-md flex items-center gap-2">
                    <FaRegUser /> Profile
                  </p>
                </Link>
                <p
                  onClick={async () => await authClient.signOut()}
                  className="text-red-600 hover:bg-gray-200 px-2 py-1 rounded-md flex items-center gap-2"
                >
                  <CiLogout className="font-bold text-lg" /> Log Out
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link href={"/login"}>
              <Button
                variant="outline"
                className={
                  "rounded-md border border-[#469165] hidden md:block "
                }
              >
                Log In
              </Button>
            </Link>

            <Link href={"/registration"}>
              <Button className={"rounded-md bg-[#469165]"}>Sign Up</Button>
            </Link>
          </div>
        )}
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {links}{" "}
            <li>
              <Link href={"/login"}>Log In</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
