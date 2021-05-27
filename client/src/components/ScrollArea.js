import React, { useState, useEffect } from "react";
import "./ScrollArea.scss";

export default function ScrollArea({
  scrollAreaId,
  snapScrollAreaId,
  children,
}) {
  const [previousSnapScrollYOffset, setPreviousSnapScrollYOffset] = useState(0);
  const contentHeight = window.innerHeight - 60;

  useEffect(() => {
    const scrollElement = document.getElementById(scrollAreaId);
    const snapScrollElement = document.getElementById(snapScrollAreaId);

    if (!scrollElement || !snapScrollElement) return;

    const updateSnapScrollPosition = () => {
      if (!scrollElement || !snapScrollElement) return;
      const currentSnapScrollYOffset = snapScrollElement.scrollTop;
      //TODO: use ref instead
      if (currentSnapScrollYOffset < contentHeight)
        snapScrollElement.scrollTop = contentHeight;
      setPreviousSnapScrollYOffset(currentSnapScrollYOffset);
    };

    scrollElement.addEventListener("scroll", updateSnapScrollPosition);
    return () => {
      if (!scrollElement) return;
      return scrollElement.removeEventListener(
        "scroll",
        updateSnapScrollPosition
      );
    };
  }, [previousSnapScrollYOffset]);

  return (
    <div id={scrollAreaId} className="scroll-area">
      {children}
    </div>
  );
}
