import React from "react";
import classNames from "classnames";
import "./SnapScrollArea.scss";

export default function SnapScrollArea({
  id,
  snapScrollDisabled,
  snapScrollDisabledMobile,
  children,
}) {
  return (
    <div
      id={id}
      className={classNames("snap-scroll-area", {
        "snap-scroll-disabled": snapScrollDisabled,
        "snap-scroll-disabled-mobile": snapScrollDisabledMobile,
      })}
    >
      {children}
    </div>
  );
}
