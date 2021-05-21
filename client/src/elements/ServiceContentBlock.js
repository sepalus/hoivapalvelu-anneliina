import React, { useState } from "react";
//import "./ServiceContentBlock.scss";
import ContentBlock from "./ContentBlock";

export default function ServiceContentBlock(props) {
  const [expanderIsOpen, setExpanderIsOpen] = useState(false);
  return (
    <ContentBlock
      {...props}
      expanderIsOpen={expanderIsOpen}
      setExpanderIsOpen={setExpanderIsOpen}
      expanderClassName="expander-service-more-information"
    ></ContentBlock>
  );
}
