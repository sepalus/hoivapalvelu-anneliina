import React, { useState, useEffect } from "react";
import "./ScrollArea.scss";

export default function ScrollArea({ children }) {
  const [previousSnapScrollYOffset, setPreviousSnapScrollYOffset] = useState(0);
  const contentHeight = window.innerHeight - 60;

  useEffect(() => {
    const scrollElement = document.getElementById("scroll-area");
    const snapScrollElement = document.getElementById("snap-scroll-area");

    const updateSnapScrollPosition = () => {
      if (!scrollElement || !snapScrollElement) return;
      const currentSnapScrollYOffset = snapScrollElement.scrollTop;
      //TODO: use ref instead
      if (currentSnapScrollYOffset < contentHeight)
        snapScrollElement.scrollTop = contentHeight;
      setPreviousSnapScrollYOffset(currentSnapScrollYOffset);
    };

    scrollElement.addEventListener("scroll", updateSnapScrollPosition);
    return () =>
      scrollElement.removeEventListener("scroll", updateSnapScrollPosition);
  }, [previousSnapScrollYOffset]);

  return (
    <div id="scroll-area" className="scroll-area">
      {children}
    </div>
  );
}
