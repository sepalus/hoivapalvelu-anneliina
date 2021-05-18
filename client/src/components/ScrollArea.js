import React from "react";
import "./ScrollArea.scss";

export default function ScrollArea({ children }) {
  return (
    <div id="scroll-area" className="scroll-area">
      {children}
    </div>
  );
}
