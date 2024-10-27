import React from "react";

type Props = {
  messageType: string;
  message: string;
};

const ChatBubble = ({ messageType, message }: Props) => {
  return (
    <div
      className={`flex flex-1 bg-[#f2f4f7] ${messageType === "user" ? "ml-auto mt-10 mr-24" : "ml-3"} items-center  p-3 rounded-lg`}
      style={{
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        maxWidth: "50%",
      }}
    >
      {message}
    </div>
  );
};

export default ChatBubble;
