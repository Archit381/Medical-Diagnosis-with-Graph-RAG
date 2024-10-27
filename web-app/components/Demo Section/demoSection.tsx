import { homePageContent } from "@/config/homePageContent";
import { siteConfig } from "@/config/site";
import React from "react";

type Props = {};

const DemoSection = (props: Props) => {
  return (
    <div id="demo-section" className="w-full justify-start mt-28">
      <h1
        style={{
          fontSize: 40,
          fontWeight: "500",
          color: siteConfig.colorSchemes.primary,
        }}
      >
        {homePageContent.heading_4}
      </h1>
      <p
        style={{
          fontSize: 18,
          marginTop: 12,
          width: "60%",
          color: siteConfig.colorSchemes.secondary,
        }}
      >
        {homePageContent.subHeading_4}
      </p>
    </div>
  );
};

export default DemoSection;
