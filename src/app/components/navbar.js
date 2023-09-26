"use client"
import Link from "next/link";
import React, { useState, useEffect  } from "react";


import { usePathname } from 'next/navigation'

const paths = [
 
  { path: "/aboutme", name: "About Me" },
  { path: "/myprojects", name: "My Projects" },
  { path: "/contactme", name: "Contact Me" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(""); 
  const pathname = usePathname();

  useEffect(() => {
    setSelectedLink(pathname);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-orange-500 text-black sm:text-lg text-sm py-2 z-20">
      <div className="sm:flex justify-between">
        <div className="2xl:container flex justify-between items-center mx-auto sm:px-4 px-10">
          <Link href="/">
            <span className="flex items-center text-black no-underline">
              <img
                src="https://media.istockphoto.com/id/1494904221/vector/basketball-ball-flat-design.webp?s=2048x2048&w=is&k=20&c=VV1yOY5DE1j1z-3laSczqLkfPaAHDEq1CJiX0hRl29E="
                alt="Your Logo"
                className="h-10 w-10 rounded-full"
              />
              <div className="font-bold ml-2">Naji El Hakim</div>
            </span>
          </Link>

          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-500 cursor-pointer focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5H20V7H4V5ZM4 11H20V13H4V11ZM4 17H20V19H4V17Z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5H20V7H4V5ZM4 11H20V13H4V11ZM4 17H20V19H4V17Z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden sm:block">
            <ul className="sm:flex sm:flex-row flex-col justify-center items-center sm:space-x-4 space-x-0 sm:space-y-0 space-y-2 mt-3">
              {paths.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <span
                      className={`${
                        selectedLink === item.path
                          ? "text-gray-500"
                          : "text-black"
                      } hover:text-gray-500 cursor-pointer`}
                      onClick={() => handleLinkClick(item.path)}
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="sm:hidden">
           <ul
    className={`sm:flex sm:flex-row flex-col justify-center items-center ${
      menuOpen ? "flex" : "hidden"
    } sm:space-x-4 space-x-0 sm:space-y-0 space-y-2 mt-3`}
  >
    {paths.map((item) => (
      <li key={item.path}>
        <Link href={item.path}>
          <span className={`${pathname === item.path ? 'text-gray-500' : 'text-black'} hover:text-gray-500 cursor-pointer`}>
            {item.name}
          </span>
        </Link>
      </li>
    ))}
  </ul>

        </div>
      </div>
    </nav>
  );
}
