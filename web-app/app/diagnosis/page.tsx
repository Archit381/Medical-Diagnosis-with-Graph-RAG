"use client";

import InputBubble from "@/components/Chat Components/inputBubble";
import React, { useState } from "react";
import { Spinner } from "@nextui-org/spinner";
import logo from "../../public/web_logo.svg";
import Image from "next/image";

type Props = {};

const Page = (props: Props) => {
  const [conversation, updateConversation] = useState<
    { id: number; userMessage: string; llmResponse: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const pause = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };
  

  async function handleInputSubmit(text: string) {

    

    updateConversation((prevConversation) => [
      ...prevConversation,
      { id: conversation.length + 1, userMessage: text, llmResponse: "null" },
    ]);

    scrollToBottom()

    setLoading(true);

    scrollToBottom()

    await pause(5000);

    updateLlmResponse(text, text);

    setLoading(false);

    scrollToBottom()
  }

  const updateLlmResponse = (userQuery: string, llmResponse: string) => {
    updateConversation((prevConversation) =>
      prevConversation.map((item) =>
        item.userMessage === userQuery
          ? { ...item, llmResponse: llmResponse }
          : item
      )
    );
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="fixed bottom-8" style={{ width: "60%" }}>
        <InputBubble handleSubmit={handleInputSubmit} />
      </div>

      {conversation.map((item, index) => (
        <React.Fragment key={index}>
          <div
            className="flex flex-1 bg-[#f2f4f7] ml-auto mr-16 mt-10 p-3 rounded-lg"
            style={{
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              maxWidth: "50%",
              wordBreak: "break-word",
              whiteSpace: "normal",
            }}
          >
            {item.userMessage}
          </div>

          {loading && item.llmResponse === "null" ? (
            <div className="flex flex-1 mr-auto ml-16 mt-10 p-3 rounded-lg">
              <Spinner />
            </div>
          ) : (
            <div
              className="flex flex-1 mr-auto ml-16 mt-10 items-center"
              style={{
                maxWidth: "50%",
                wordBreak: "break-word",
                whiteSpace: "normal",
                marginBottom: (conversation.length==item.id ? 100 : 0),
              }}
            >
              <div>
                <Image
                  alt="ClinGraph Logo"
                  src={logo}
                  width={45}
                  height={45}
                  style={{ borderRadius: 20 }}
                />
              </div>
              <div
                className="flex flex-1 rounded-lg p-3 bg-[#f2f4f7] ml-3"
                style={{
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                {item.llmResponse}
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default Page;
