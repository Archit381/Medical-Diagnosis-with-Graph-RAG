import { homePageContent } from "@/config/homePageContent";
import { siteConfig } from "@/config/site";
import React from "react";
import GreyBubble from "./greyBubble";

type Props = {};

const MedicalList = (props: Props) => {
  return (
    <div className="w-full mt-14">
      <div className="flex flex-1 justify-center flex-col text-center">
        <h1
          style={{
            fontSize: 40,
            fontWeight: "500",
            color: siteConfig.colorSchemes.primary,
          }}
        >
          {homePageContent.heading_3}
        </h1>

        <div className="flex justify-center mt-14">
          {homePageContent.medicalFields_1.map((item) => {
            return (
              <div className="inline-flex px-2">
                <GreyBubble text={item.name} />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-4">
          {homePageContent.medicalFields_2.map((item) => {
            return (
              <div className="inline-flex px-2">
                <GreyBubble text={item.name} />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-4">
          {homePageContent.medicalFields_3.map((item) => {
            return (
              <div className="inline-flex px-2">
                <GreyBubble text={item.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MedicalList;
