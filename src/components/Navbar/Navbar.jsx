"use client";

import Link from "next/link";
import { useState } from "react";
import { SlClose, SlMenu } from "react-icons/sl";
import Container from "../Container/Container";
import { Searchbar } from "../SearchBar/Searchbar";

export const Navbar = () => {
  const currentUser = false;
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Community", path: "/community" },
    { label: "Browse Jobs", path: "/jobs" },
    { label: "Login", path: "/login", condition: true },
    { label: "Create Account", path: "/signup", condition: true },
  ];

  const renderNavItems = () => {
    return navItems.map((item, index) => (
      <Link href={item.path} key={index}>
        {item.label}
      </Link>
    ));
  };

  return (
    <div className="bg-[#129a00]">
      <Container>
        <div className="py-5 flex items-center justify-between">
          <h1 className="font-extrabold text-white text-xl">WorkHub</h1>
          <Searchbar />
          <nav
            className={`flex flex-col md:flex-row md:relative absolute ${
              open ? "top-5 bg-primary dark:bg-black" : "-top-full"
            } right-0 md:w-fit w-full gap-5 transition-all duration-300 md:h-0 md:gap-10 rounded-b-xl md:rounded-b-none p-5 items-center z-20`}
          >
            {navItems.map((navItem, index) => {
              if (!navItem.condition) {
                return (
                  <Link
                    className="text-white border-b-2 border-white border-opacity-0 hover:border-opacity-100 transition-all duration-200"
                    href={navItem.path}
                    key={index}
                  >
                    {navItem.label}
                  </Link>
                );
              } else if (navItem.condition && !currentUser) {
                return (
                  <Link
                    className={`text-white ${
                      navItem.path === "/signup" &&
                      "bg-green-800 hover:shadow-md text-primary py-1 px-6 rounded-md font-bold"
                    }`}
                    href={navItem.path}
                    key={index}
                  >
                    {navItem.label}
                  </Link>
                );
              }
              return null;
            })}
          </nav>
          <div onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            {open ? (
              <SlClose className="dark:text-white absolute right-6 top-9 text-3xl z-20" />
            ) : (
              <SlMenu className="dark:text-white text-black text-2xl" />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
