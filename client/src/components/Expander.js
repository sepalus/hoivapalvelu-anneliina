import React from "react";
import classNames from "classnames";
import "./Expander.scss";

export default function Expander({
  isOpen,
  title,
  text,
  listTitle,
  list,
  className,
}) {
  return (
    <div
      className={classNames("expander", {
        "hide-element": !isOpen,
        [`${className}`]: className,
      })}
    >
      {title && <h3>{title}</h3>}
      {text && <p>{text}</p>}
      {listTitle && <h4>{listTitle}</h4>}
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
