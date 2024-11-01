import { ImplementationPageContent } from "@/config/implementationPageContent";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import React from "react";
import basicRag from "../../public/other/basicRag.png";
import comparisonPic from "../../public/other/comp.png";
import chunkingPic from "../../public/other/chunking_architecture.png";
import mainArchitecturePic from '../../public/other/main_architecture.png'

type Props = {};

const page = (props: Props) => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-full justify-start mt-20">
        <div>
          <h1 style={{ fontSize: 60, color: siteConfig.colorSchemes.primary }}>
            {ImplementationPageContent.section_1.heading}
          </h1>
          <h1
            style={{
              fontSize: 60,
              marginTop: -20,
              color: siteConfig.colorSchemes.primary,
            }}
          >
            {ImplementationPageContent.section_1.subHeading}
          </h1>
          <p
            style={{
              color: siteConfig.colorSchemes.secondary,
              marginTop: 40,
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            {ImplementationPageContent.section_1.paragraph}
          </p>
        </div>

        <div className="mt-20">
          <h1 style={{ fontSize: 32, color: siteConfig.colorSchemes.primary }}>
            {ImplementationPageContent.section_2.heading}
          </h1>

          <p
            style={{
              color: siteConfig.colorSchemes.secondary,
              marginTop: 40,
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            {ImplementationPageContent.section_2.paragraph_1}
          </p>

          <div className="flex flex-row mt-16">
            <Image
              alt="Basic Rag architecure"
              src={basicRag}
              style={{ width: "50%" }}
            />

            <div className="flex-col">
              <p
                className="ml-10 mt-4"
                style={{
                  color: siteConfig.colorSchemes.secondary,
                  fontSize: 20,
                  fontWeight: "500",
                }}
              >
                {ImplementationPageContent.section_2.paragraph_2}
              </p>
              <p
                className="ml-10 mt-10"
                style={{
                  color: siteConfig.colorSchemes.secondary,
                  fontSize: 20,
                  fontWeight: "500",
                }}
              >
                {ImplementationPageContent.section_2.paragraph_3}
              </p>
              <p
                className="ml-10 mt-10"
                style={{
                  color: siteConfig.colorSchemes.secondary,
                  fontSize: 20,
                  fontWeight: "500",
                }}
              >
                {ImplementationPageContent.section_2.paragraph_4}
              </p>
            </div>
          </div>

          <div className="flex flex-row mt-16">
            <div className="flex-col">
              <p
                className="mt-4"
                style={{
                  color: siteConfig.colorSchemes.secondary,
                  fontSize: 20,
                  fontWeight: "500",
                }}
              >
                {ImplementationPageContent.section_2.paragraph_5}
              </p>
              <p
                className="mt-10"
                style={{
                  color: siteConfig.colorSchemes.secondary,
                  fontSize: 20,
                  fontWeight: "500",
                }}
              >
                {ImplementationPageContent.section_2.paragraph_6}
              </p>
            </div>
            <Image
              alt="Basic Rag architecure"
              src={comparisonPic}
              style={{ width: "50%", height: "50%" }}
            />
          </div>

          <p
            className="mt-10"
            style={{
              color: siteConfig.colorSchemes.secondary,
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            {ImplementationPageContent.section_2.paragraph_7}
          </p>

          <div className="mt-20">
            <h1
              style={{ fontSize: 32, color: siteConfig.colorSchemes.primary }}
            >
              {ImplementationPageContent.section_3.heading}
            </h1>

            <div className="flex flex-row mt-16">
              <Image
                alt="Chunking Architecture"
                src={chunkingPic}
                style={{ width: "50%", height: "50%" }}
              />
              <div className="flex flex-col">
                <p
                  className="mt-10"
                  style={{
                    color: siteConfig.colorSchemes.secondary,
                    fontSize: 20,
                    fontWeight: "500",
                  }}
                >
                  {ImplementationPageContent.section_3.paragraph_1}
                </p>
                <p
                  className="mt-10"
                  style={{
                    color: siteConfig.colorSchemes.secondary,
                    fontSize: 20,
                    fontWeight: "500",
                  }}
                >
                  {ImplementationPageContent.section_3.paragraph_2}
                </p>
                <p
                  className="mt-10"
                  style={{
                    color: siteConfig.colorSchemes.secondary,
                    fontSize: 20,
                    fontWeight: "500",
                  }}
                >
                  {ImplementationPageContent.section_3.paragraph_3}
                </p>
              </div>
            </div>
            <p
              className="mt-10"
              style={{
                color: siteConfig.colorSchemes.secondary,
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              {ImplementationPageContent.section_3.paragraph_4}
            </p>
          </div>

            <div className="flex flex-row mt-16">
              <div className="flex flex-col">
                <p
                  className="mt-10"
                  style={{
                    color: siteConfig.colorSchemes.secondary,
                    fontSize: 20,
                    fontWeight: "500",
                  }}
                >
                  {ImplementationPageContent.section_3.paragraph_5}
                </p>
                <p
                  className="mt-10"
                  style={{
                    color: siteConfig.colorSchemes.secondary,
                    fontSize: 20,
                    fontWeight: "500",
                  }}
                >
                  {ImplementationPageContent.section_3.paragraph_6}
                </p>
                <p
                  className="mt-10"
                  style={{
                    color: siteConfig.colorSchemes.secondary,
                    fontSize: 20,
                    fontWeight: "500",
                  }}
                >
                  {ImplementationPageContent.section_3.paragraph_7}
                </p>
              </div>
              <Image
                alt="Main RAG Architecture"
                src={mainArchitecturePic}
                style={{ width: "50%", height: "50%" }}
              />
            </div>
            <p
              className="mt-10"
              style={{
                color: siteConfig.colorSchemes.secondary,
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              {ImplementationPageContent.section_3.paragraph_8  }
            </p>
        </div>
      </div>
    </section>
  );
};

export default page;
