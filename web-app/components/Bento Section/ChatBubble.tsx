import { siteConfig } from "@/config/site";
import Image, { StaticImageData } from "next/image";
import React from "react";
import webLogo from "../../public/web_logo.svg";

type Props = {
  Heading: string;
  subHeading: string;
  image: StaticImageData;
  roundedImage: boolean;
};

const ChatBubble = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "white",
        width: "100%",
        borderRadius: 12,
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
      }}
    >
      <Image
        alt="Image Logo"
        src={props.image}

        style={{ borderRadius: props.roundedImage ? 30 : 6, height: 50, width: 50 }}
      />
      <div className="flex flex-col ml-2">
        {props.Heading ? (
          <p
            style={{
              fontWeight: "bold",
              color: siteConfig.colorSchemes.primary,
              fontSize: 15,
            }}
          >
            {props.Heading}
          </p>
        ) : null}
        {props.subHeading ? (
          <p
            style={{
              fontWeight: "500",
              color: siteConfig.colorSchemes.secondary,
              fontSize: 13,
            }}
          >
            {props.subHeading}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default ChatBubble;
