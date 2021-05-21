import React from "react";
import "./Expander.scss";

export default function Expander({ title, text }) {
  return (
    <div className="expander">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
