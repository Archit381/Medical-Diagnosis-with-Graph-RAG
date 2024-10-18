import React from "react";
import { homePageContent } from "@/config/homePageContent";
import './carouselStyle.css'

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
        <h1 style={{fontSize: 34, fontWeight: '500'}}>{homePageContent.heading_1}</h1>
      </div>

      <div className="flex flex-row w-full justify-start items-center">

        {/* <div className="flex flex-col">
          <p>Our Trusted</p>
          <p>Knowledge Base</p>
        </div> */}

        <div class="wrapper">
            {homePageContent.literatureItems.map((item)=>{
                const animationDelay = (30/totalLiteratureItems*(totalLiteratureItems-item.id)*-1)
                return(
                    <div class={`item items-center text-center justify-center`} key={item.id} style={{animationDelay: `${animationDelay}s`}}>
                      <p>{item.name}</p>
                    </div>
                )
            })}
        </div>

      </div>
    </>
  );
};

export default LiteratureCarousel;