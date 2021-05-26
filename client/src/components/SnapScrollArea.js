import React from "react";
import classNames from "classnames";
import "./SnapScrollArea.scss";

export default function SnapScrollArea({ notInMobile, children }) {
  return (
    <div
      id="snap-scroll-area"
      className={classNames("snap-scroll-area", {
        "snap-scroll-area-not-mobile": notInMobile,
      })}
    >
      {children}
    </div>
  );
}
