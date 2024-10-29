"use client";

import InputBubble from "@/components/Chat Components/inputBubble";
import React, { useState, useEffect, useRef } from "react";
import { Spinner } from "@nextui-org/spinner";
import logo from "../../public/web_logo.svg";
import Image from "next/image";
import IntroComponent from "@/components/Chat Components/introComponent";
import ChatBubble from "@/components/Chat Components/chatBubble";
import axios from "axios";

type Props = {};

const Page = (props: Props) => {
  const [conversation, updateConversation] = useState<{ id: number; userMessage: string; llmResponse: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  const formatConversationIntoContext = () => {
    return conversation.map((item) => {
      return `user: "${item.userMessage}"\n       ClinGraph (You): "${item.llmResponse}"\n`;
    }).join('');
  };

  const apiRequest = async (query: string, context: string) => {
    const modifiedStr = query.replace(/\?+$/, '');
    const url = `https://architojha-clingraph-api.hf.space/query/${modifiedStr}?context=${context}`;

    try {
      const response = await axios.get(url, {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        }
      });

      const data = await response.data;
      return data.result; 

    } catch (error) {
      console.log(error);
    }
  };

  async function handleInputSubmit(text: string) {
    const nextId = conversation.length > 0 ? conversation[conversation.length - 1].id + 1 : 1;

    updateConversation((prevConversation) => [
      ...prevConversation,
      { id: nextId, userMessage: text, llmResponse: "null" },
    ]);

    setLoading(true);

    const context = formatConversationIntoContext();
    
    const llmReply = await apiRequest(text, context);
    
    updateLlmResponse(text, llmReply);
    
    setLoading(false);
  }

  const updateLlmResponse = (userQuery: string, llmResponse: string) => {
    updateConversation((prevConversation) =>
      prevConversation.map((item) =>
        item.userMessage === userQuery ? { ...item, llmResponse: llmResponse } : item
      )
    );
  };

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="fixed bottom-8" style={{ width: "50%", zIndex: 10 }}>
        <InputBubble handleSubmit={handleInputSubmit} isLoading={loading} />
      </div>

      {conversation.length > 0 ? null : <IntroComponent />}

      {conversation.map((item, index) => (
        <React.Fragment key={index}>
          <ChatBubble messageType="user" message={item.userMessage} />

          <div
            ref={index === conversation.length - 1 ? lastMessageRef : null}
            className="flex flex-1 mr-auto ml-24 mt-10 p-3 rounded-lg items-center"
            style={{
              maxWidth: "50%",
              wordBreak: "break-word",
              whiteSpace: "normal",
              marginBottom: conversation.length === item.id ? 100 : 0,
            }}
          >
            <Image
              alt="ClinGraph Logo"
              src={logo}
              width={45}
              height={45}
              style={{ borderRadius: 20 }}
            />
            {item.llmResponse === "null" ? (
              <div
                className="flex flex-1 ml-3 items-center bg-[#f2f4f7] p-3 rounded-lg"
                style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
              >
                <p style={{ marginRight: 15 }}>Analyzing</p>
                <Spinner color="default" size="sm" />
              </div>
            ) : (
              <ChatBubble messageType="llm" message={item.llmResponse} />
            )}
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Page;
