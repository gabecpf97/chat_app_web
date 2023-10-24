import React, { useState } from "react";
import MessageView from "./messageView";
import Composer from "./composer";

const ChatView = () => {
  return (
    <div className="chat_view">
      welcome to chat
      <MessageView />
      <Composer />
    </div>
  );
};

export default ChatView;
