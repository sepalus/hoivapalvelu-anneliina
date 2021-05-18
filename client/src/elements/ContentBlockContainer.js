import React from "react";
import "./ContentBlockContainer.scss";

export default function ContentBlockContainer({ children }) {
  return (
    <div className="content-block-container">
      <div className="content-block-container-content-wrapper">{children}</div>
    </div>
  );
}
