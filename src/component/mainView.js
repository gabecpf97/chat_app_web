import React, { useState } from "react";
import ContactView from "./contactView";
import ChatView from "./chatView";

const MainView = () => {
  return (
    <div className="main_view">
      main view
      <ContactView />
      <ChatView />
    </div>
  );
};

export default MainView;
