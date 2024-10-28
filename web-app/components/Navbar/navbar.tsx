"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/web_logo.svg";
import { siteConfig } from "@/config/site";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-1 w-full justify-between flex-row ">
      <a href="/" className="flex flex-row items-center">
        <Image
          alt="Website Logo"
          src={logo}
          width={25}
          height={25}
          style={{ borderRadius: 5 }}
        />
        <h1
          style={{
            marginLeft: 7,
            fontSize: 20,
            fontFamily: "sans-serif",
            fontWeight: "bold",
            objectFit: "contain",
          }}
        >
          {siteConfig.name}
        </h1>
      </a>

      <div className="flex flex-row items-center">
        <div
          className="flex flex-row items-center bg-[#f2f4f7] rounded-full py-3 px-3"
          style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
        >
          {siteConfig.navItems.map((item) => {
            return (
              <div className="px-5" key={item.label}>
                <Link
                  href={item.href}
                  style={{
                    fontWeight: "500",
                    fontSize: 14,
                    color: isHovered
                      ? siteConfig.colorSchemes.primary
                      : "#475467",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>

        <a
          href={siteConfig.links.github}
          className="flex flex-1 ml-6 py-4 px-7 rounded-full"
          style={{ backgroundColor: siteConfig.colorSchemes.primary, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}

        >
          <p className="text-white font-semibold" style={{fontSize: 14}}>Check the Repo!</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
