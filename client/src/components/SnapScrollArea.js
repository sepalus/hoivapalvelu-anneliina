import React, { useState, useEffect } from "react";
import classNames from "classnames";

import "./SnapScrollArea.scss";

export default function SnapScrollArea({ children }) {
  const [previousYOffset, setPreviousYOffset] = useState(0);
  const [freezeChildScroll, setFreezeChildScroll] = useState(true);
  const contentHeight = window.innerHeight - 60;

  useEffect(() => {
    const snapScrollElement = document.getElementById("snap-scroll-area");

    const detectViewportOnScroll = () => {
      const currentYOffset = snapScrollElement.scrollTop;
      setPreviousYOffset(currentYOffset);
      setFreezeChildScroll(currentYOffset < contentHeight);
    };

    snapScrollElement.addEventListener("scroll", detectViewportOnScroll);
    return () =>
      snapScrollElement.removeEventListener("scroll", detectViewportOnScroll);
  }, [previousYOffset, freezeChildScroll]);

  return (
    <div
      id="snap-scroll-area"
      className={classNames("snap-scroll-area", {
        "freeze-child-scroll": freezeChildScroll,
        "unfreeze-child-scroll": !freezeChildScroll,
      })}
    >
      {children}
    </div>
  );
}
