import React from "react";
import classNames from "classnames";
import "./Expander.scss";

export default function Expander({
  isOpen,
  title,
  text,
  listTitle,
  listTitleIcon,
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
      <div className="expander-list">
        {listTitle && (
          <>
            {listTitleIcon && (
              <span className="expander-list-title-icon material-icons-outlined">
                {listTitleIcon}
              </span>
            )}
            <h4 className="expander-list-title text-semibold">{listTitle}</h4>
          </>
        )}
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
    </div>
  );
}
