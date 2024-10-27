"use client";

import { siteConfig } from "@/config/site";
import React, { useState } from "react";
import Arrow from "../../public/icons/orange_arrow.svg";
import Image from "next/image";

type Props = {
  handleSubmit: (text: string)=>void;
  isLoading: boolean
};

const InputBubble = ({handleSubmit, isLoading}: Props) => {
  const [currentText, setCurrentText] = useState("");


  const buttonClick=()=>{
    handleSubmit(currentText);
  }

  return (
    <div className="flex flex-1 w-full h-full bg-[#f2f4f7] rounded-3xl p-3 shadow-lg z-10">
      <input
        type="text"
        value={currentText}
        onChange={(e) => setCurrentText(e.target.value)}
        className="flex flex-1 rounded-md focus:outline-none bg-[#f2f4f7]"  
        style={{ color: siteConfig.colorSchemes.primary }}
        placeholder="Ask ClinGraph"
      />


      <button className="focus:outline-none hover:bg-[#e4e6eb] p-2 rounded-full" onClick={buttonClick} disabled={isLoading} >
        <Image alt="orange-arrow" src={Arrow} height={35} width={35} />
      </button>
    </div>
  );
};

export default InputBubble;
