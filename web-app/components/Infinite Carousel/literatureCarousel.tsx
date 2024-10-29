import React from "react";
import { homePageContent } from "@/config/homePageContent";
import "./carouselStyle.css";
import { siteConfig } from "@/config/site";

type Props = {};

const LiteratureCarousel = (props: Props) => {
  const totalLiteratureItems = homePageContent.literatureItems.length;

  return (
    <>
      <div
        className="mx-32 text-center"
        style={{
          marginTop: 60,
          display: "flex",
          alignContent: "center",
          justifySelf: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: siteConfig.colorSchemes.primary,
          }}
        >
          {homePageContent.heading_1}
        </h1>
      </div>

      <div className="flex flex-row w-full justify-start items-center">
        {/* <div className="flex flex-col">
          <p>Our Trusted</p>
          <p>Knowledge Base</p>
        </div> */}

        <div className="wrapper">
          {homePageContent.literatureItems.map((item) => {
            const animationDelay =
              (30 / totalLiteratureItems) *
              (totalLiteratureItems - item.id) *
              -1;
            return (
              <div
                className={`item items-center text-center justify-center`}
                key={item.id}
                style={{ animationDelay: `${animationDelay}s` }}
              >
                <p
                  style={{
                    fontWeight: "500",
                    color: siteConfig.colorSchemes.secondary,
                  }}
                >
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LiteratureCarousel;
