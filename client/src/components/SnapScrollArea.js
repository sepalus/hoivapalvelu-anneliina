import React from "react";
import "./SnapScrollArea.scss";

export default function SnapScrollArea({ children }) {
  return (
    <div id="snap-scroll-area" className="snap-scroll-area">
      {children}
    </div>
  );
}
