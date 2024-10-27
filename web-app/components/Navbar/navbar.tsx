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
      <div className="flex flex-row items-center">
        <div>
          <Image
            alt="Website Logo"
            src={logo}
            width={30}
            height={30}
            style={{ borderRadius: 5 }}
          />
        </div>
        <h1
          style={{
            marginLeft: 14,
            fontSize: 25,
            fontFamily: "sans-serif",
            fontWeight: "bold",
            objectFit: "contain",
          }}
        >
          {siteConfig.name}
        </h1>
      </div>

      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center bg-[#f2f4f7] rounded-full py-4 px-4">
          {siteConfig.navItems.map((item) => {
            return (
              <div className="px-5">
                <Link
                  href={item.href}
                  style={{
                    fontWeight: "500",
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

        <div
          className="flex flex-1 ml-6 py-4 px-7 rounded-full"
          style={{ backgroundColor: siteConfig.colorSchemes.primary }}
        >
          <p className="text-white font-semibold">Button</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
