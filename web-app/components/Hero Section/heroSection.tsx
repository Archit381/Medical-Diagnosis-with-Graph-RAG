import { siteConfig } from "@/config/site";
import { homePageContent } from "@/config/homePageContent";
import uploadLogo from "../../public/upload.svg";
import insightsLogo from "../../public/ai_insights.svg";
import chatLogo from "../../public/chat_ai.svg";
import Image from "next/image";

type Props = {};

const imageMap = {
  process_1: {
    src: uploadLogo,
    alt: "Sharing Icon",
  },
  process_2: {
    src: insightsLogo,
    alt: "Sparkling Icon",
  },
  process_3: {
    src: chatLogo,
    alt: "Chat Icon",
  },
};

const HeroSection = (props: Props) => {
  return (
    <div className="w-full justify-start mt-28">
      <h1 style={{ fontSize: 80, color: siteConfig.colorSchemes.primary }}>
        {homePageContent.title_1}
      </h1>
      <h1
        style={{
          fontSize: 80,
          marginTop: -20,
          color: siteConfig.colorSchemes.primary,
        }}
      >
        {homePageContent.title_2}
      </h1>
      <p
        style={{
          color: siteConfig.colorSchemes.secondary,
          marginTop: 15,
          width: "60%",
          fontSize: 17,
          fontWeight: "500",
        }}
      >
        {homePageContent.subtitle}
      </p>

      <div className="flex flex-row">
        {homePageContent.process.map((item) => {
          const image = imageMap[item.tag];

          return (
            <div
              key={item.tag}
              className="flex flex-row items-center mt-12 mr-12"
            >
              {image && (
                <Image src={image.src} alt={image.alt} width={40} height={40} />
              )}

              <p
                style={{
                  color: siteConfig.colorSchemes.primary,
                  fontSize: 20,
                  marginLeft: 10,
                }}
              >
                {item.heading}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row mt-14">
        <div
          style={{
            backgroundColor: siteConfig.colorSchemes.primary,
            borderRadius: 50,
          }}
        >
          <p style={{ color: "white" }} className="px-20 py-3">
            Get Started
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#f2f4f7",
            borderRadius: 50,
            marginLeft: 15,
          }}
        >
          <p
            style={{ color: siteConfig.colorSchemes.primary }}
            className="px-20 py-3"
          >
            See it in action
          </p>
        </div>
      </div>

      {/* Gif of the website workflow */}

      <div className="flex w-full mt-16 h-52 rounded-lg border-8 border-[#eaecf0] items-center justify-center p-96">
        GIF of the website working here
      </div>
    </div>
  );
};

export default HeroSection;
