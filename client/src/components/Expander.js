import React from "react";
import classNames from "classnames";
import "./Expander.scss";

export default function Expander({ isOpen, title, text, list, className }) {
  return (
    <div
      className={classNames("expander", {
        "hide-element": !isOpen,
        [`${className}`]: className,
      })}
    >
      {title && <h3>{title}</h3>}
      {text && <p>{text}</p>}
      {list && (
        <ul>
          {list.map((listItem) => (
            <li>
              <p className="text-small bullet-point-item">{listItem}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
