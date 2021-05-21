import React from "react";
import classNames from "classnames";
import "./ContentBlockContainer.scss";

export default function ContentBlockContainer({ children, backgroundColor }) {
  return (
    <div
      className={classNames(
        "content-block-container background-medium-transparent",
        {
          [`background-${backgroundColor}`]: backgroundColor,
        }
      )}
    >
      <div className="content-block-container-content-wrapper">{children}</div>
    </div>
  );
}
