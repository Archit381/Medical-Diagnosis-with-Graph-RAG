import React from "react";

type Props = {
  messageType: string;
  message: string;
};

const ChatBubble = ({ messageType, message }: Props) => {
  return (
    <div
      className={`flex flex-1 bg-[#f2f4f7] ${messageType === "user" ? "ml-auto mt-10" : "ml-3"} mr-24  p-3 rounded-lg`}
      style={{
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        maxWidth: "50%",
        wordBreak: "break-word",
        whiteSpace: "normal",
      }}
    >
      {message}
    </div>
  );
};

export default ChatBubble;
