import React, { useState } from "react";
import classNames from "classnames";
//import "./ServiceContentBlock.scss";
import ContentBlock from "./ContentBlock";
import Button from "../components/Button";
import Expander from "../components/Expander";

export default function ServiceContentBlock(props) {
  const { expanderElement, expanderButtonText, expanderClassName } = props;

  const [expanderIsOpen, setExpanderIsOpen] = useState(false);
  return (
    <ContentBlock
      {...props}
      expanderIsOpen={expanderIsOpen}
      setExpanderIsOpen={setExpanderIsOpen}
      expanderClassName="expander-service-more-information"
    >
      {expanderElement && (
        <>
          <Button
            text={expanderButtonText}
            className={classNames(
              "content-block-button content-block-expander-button",
              {
                "content-block-expander-button-open text-bold": expanderIsOpen,
              }
            )}
            onClick={() => setExpanderIsOpen(!expanderIsOpen)}
            noHoverEffect={expanderIsOpen}
          >
            <span className="material-icons">
              {expanderIsOpen ? "expand_less" : "expand_more"}
            </span>
            {expanderIsOpen && (
              <span class="material-icons-outlined expander-button-open-extra-icon">
                favorite_border
              </span>
            )}
          </Button>
          <Expander
            list={expanderElement.list}
            isOpen={expanderIsOpen}
            className={expanderClassName}
          ></Expander>
        </>
      )}
    </ContentBlock>
  );
}
