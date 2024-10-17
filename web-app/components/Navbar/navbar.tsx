import React from "react";
import Image from "next/image";
import logo from "../../public/web_logo.png";
import { siteConfig } from "@/config/site";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between flex-row ">
      <div className="flex flex-row items-center">
        <div>
          <Image
            alt="Website Logo"
            src={logo}
            width={40}
            height={40}
            style={{ borderRadius: 10 }}
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
        <div className="flex flex-row items-center bg-[#f2f4f7] rounded-full py-4 px-7">
          {siteConfig.navItems.map((item) => {
            return (
              <div className="px-5">
                <Link href={item.href} className="text-slate-500 font-medium">{item.label}</Link>
              </div>
            );
          })}
        </div>

        <div className="flex flex-1 ml-6 bg-black py-4 px-7  rounded-full">
            <p className="text-white font-semibold">Button</p>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
