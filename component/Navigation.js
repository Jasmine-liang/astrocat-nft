import React from "react";
import Link from "next/link";
import { useState } from "react";
export default function Navigation() {

  
  const [active, setActive] = useState(false);
  const navItems = [
    { href: "#aboutus", name: "About Us" },
    { href: "#roadmap", name: "Roadmap" },
    { href: "#team", name: "Team" },
    { href: "#faqs", name: "FAQs" },
  ];

  const renderNavItems = () => {
    return navItems.map((item, index) => {
      return (
        <Link href={item.href} key={index}>
          <a className="px-3 py-2 rounded text-white font-bold items-center justify-center ">
            {item.name}
          </a>
        </Link>
      );
    });
  };
  const toggleMenu = () => {
    setActive(!active);
  };

  // 手机端
  const renderDropDown = () => {
    return (
      <div
        className={
          active ? " items-center p-6 text-xl flex flex-col" : "hidden"
        }
      >
        <div className="flex flex-col">{renderNavItems()}</div>
        <div className="flex space-y-2 flex-col">
          <a
            href="https://twitter.com/UnknownDAO_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/twitter.png" alt="" />
          </a>
          <a
            href="https://discord.gg/Ftfmsyr6MT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/discord.png" alt="" />
          </a>
          <a
            href="https://opensea.io/collection/astrocattokens"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/opensea.png" alt="" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className=" bg-primary-300  md:px-40 py-10">
        <nav
          className=" flex layout  justify-between   py-4
    md:py-0
    items-center"
        >
          <div className={" w-full font-fredoka-one flex justify-between"}>
            <Link className="" href="/">
              <a className="flex items-center ">
                <img className="" src="/Logo.svg" alt="" />
              </a>
            </Link>

            <button className="md:hidden" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                className="h-10 w-10 cursor-pointer md:hidden block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className="hidden md:flex justify-between w-full  md:flex-row md:space-x-6 md:px-4 md:py-4 md:text-2xl">
              <div className="flex ">{renderNavItems()}</div>
              <div className="hidden md:flex md:space-x-10">
                <a
                  className="md:h-10 md:w-10"
                  href="https://twitter.com/UnknownDAO_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/twitter.png" alt="" />
                </a>
                <a
                  variant="outlined"
                  className="md:h-10 md:w-10"
                  href="https://discord.com/invite/udao"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/discord.png" alt="" />
                </a>
                <a
                  href="https://opensea.io/collection/astrocattokens"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/opensea.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </nav>
        {renderDropDown()}
      </div>
    </>
  );
}
