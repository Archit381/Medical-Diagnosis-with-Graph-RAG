import { homePageContent } from "@/config/homePageContent";
import { siteConfig } from "@/config/site";
import webLogo from "../../public/web_logo.svg";
import React from "react";
import Image from "next/image";
import graphSC from "../../public/bento-sc/graphDB.png";
import smallGraphSC from "../../public/bento-sc/smallGraph.png";
import bookGIF from "../../public/bento-sc/books.gif";
import ChatBubble from "./ChatBubble";
import userIcon1 from "../../public/bento-sc/user_1.jpg";
import userIcon2 from "../../public/bento-sc/user_2.jpg";
import userIcon3 from "../../public/bento-sc/user_3.jpg";

type Props = {};

const Bento = (props: Props) => {
  return (
    <div className="w-full justify-start mt-24">
      <h1
        style={{
          fontSize: 40,
          fontWeight: "500",
          color: siteConfig.colorSchemes.primary,
        }}
      >
        {homePageContent.heading_2}
      </h1>
      <p
        style={{
          fontSize: 18,
          marginTop: 12,
          width: "60%",
          color: siteConfig.colorSchemes.secondary,
        }}
      >
        {homePageContent.subHeading_2}
      </p>

      <div className="flex flex-row mt-16 w-full">
        <div
          style={{
            display: "flex",
            width: "40%",
            backgroundColor: "#f2f4f7",
            marginRight: 12,
            borderRadius: 12,
            height: 620,
            padding: 40,
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontWeight: "500",
              color: siteConfig.colorSchemes.primary,
              fontSize: 20,
            }}
          >
            {homePageContent.bento_section_1.title}
          </p>
          <p
            style={{
              color: siteConfig.colorSchemes.secondary,
              fontSize: 17,
              marginTop: 10,
            }}
          >
            {homePageContent.bento_section_1.subtitle}
          </p>
          <div className="flex justify-center rounded-xl">
            <Image
              alt="Graph DB Screenshot"
              src={smallGraphSC}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
            <ChatBubble
              Heading="ClinGraph"
              subHeading="Diagnosing you based on the symptoms...."
              image={webLogo}
              roundedImage={false}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "60%",
            backgroundColor: "#f2f4f7",
            marginLeft: 12,
            borderRadius: 12,
            height: 620,
            flexDirection: "column",
          }}
        >
          <div className="flex justify-center rounded-xl">
            <Image
              alt="Graph DB Screenshot"
              src={graphSC}
              style={{ width: "60%", height: "100%" }}
            />
          </div>
          <div style={{ padding: 40 }}>
            <p
              style={{
                fontWeight: "500",
                color: siteConfig.colorSchemes.primary,
                fontSize: 20,
              }}
            >
              {homePageContent.bento_section_2.title}
            </p>
            <p
              style={{
                color: siteConfig.colorSchemes.secondary,
                fontSize: 17,
                marginTop: 10,
              }}
            >
              {homePageContent.bento_section_2.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-6 w-full">
        <div
          style={{
            display: "flex",
            width: "60%",
            backgroundColor: "#f2f4f7",
            marginRight: 12,
            borderRadius: 12,
            height: 620,
            padding: 40,
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <p
            style={{
              fontWeight: "500",
              color: siteConfig.colorSchemes.primary,
              fontSize: 20,
            }}
          >
            {homePageContent.bento_section_3.title}
          </p>
          <p
            style={{
              color: siteConfig.colorSchemes.secondary,
              fontSize: 17,
              marginTop: 10,
            }}
          >
            {homePageContent.bento_section_3.subtitle}
          </p>

          <Image
            alt="Literature Gif"
            src={bookGIF}
            style={{ width: "90%",  marginTop: 70 }}
          />
        </div>

        <div
          style={{
            display: "flex",
            width: "40%",
            backgroundColor: "#f2f4f7",
            marginLeft: 12,
            borderRadius: 12,
            height: 620,
            flexDirection: "column",
            position: "relative",
          }}
          className="pl-10 pt-10"
        >
          <p
            style={{
              fontWeight: "500",
              color: siteConfig.colorSchemes.primary,
              fontSize: 20,
            }}
          >
            {homePageContent.bento_section_4.title}
          </p>
          <p
            style={{
              color: siteConfig.colorSchemes.secondary,
              fontSize: 17,
              marginTop: 10,
            }}
          >
            {homePageContent.bento_section_4.subtitle}
          </p>

          <div
            style={{
              display: "flex",
              overflow: "visible",
              zIndex: 10,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              transform: "translateX(60px)",
              marginTop: 70,
            }}
          >
            <ChatBubble
              Heading=""
              subHeading="What could be causing my chest pain and shortness of breath?"
              image={userIcon1}
              roundedImage={true}
            />
          </div>
          <div
            style={{
              display: "flex",
              overflow: "visible",
              zIndex: 10,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              transform: "translateX(60px)",
              marginTop: 40,
            }}
          >
            <ChatBubble
              Heading=""
              subHeading="How is chronic sinusitis in ENT typically treated?"
              image={userIcon2}
              roundedImage={true}
            />
          </div>
          <div
            style={{
              display: "flex",
              overflow: "visible",
              zIndex: 10,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              transform: "translateX(60px)",
              marginTop: 40,
            }}
          >
            <ChatBubble
              Heading=""
              subHeading="What are the treatment options for managing complications during anesthesia?"
              image={userIcon3}
              roundedImage={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
