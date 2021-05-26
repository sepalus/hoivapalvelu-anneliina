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
      {(title || text) && (
        <div className="expander-information">
          {title && <h4 className="expander-title">{title}</h4>}
          {text && <p>{text}</p>}
        </div>
      )}
      {list && (
        <div className="expander-list">
          {listTitle && (
            <>
              {listTitleIcon && (
                <span className="expander-list-title-icon material-icons-outlined">
                  {listTitleIcon}
                </span>
              )}
              <p className="expander-list-title text-semibold">{listTitle}</p>
            </>
          )}
          <ul className="expander-list-item-wrapper">
            {list.map((listItem) => (
              <li>
                <p className="text-small bullet-point-item">{listItem}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
