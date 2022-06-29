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
  closeButtonElement,
}) {
  const hasInformationElement = title || text;
  const hasListTitle = listTitle;
  return (
    <div
      className={classNames("expander", {
        "hide-element": !isOpen,
        [`${className}`]: className,
      })}
    >
      {hasInformationElement && (
        <div className="expander-information">
          {title && <h4 className="expander-title">{title}</h4>}
          {closeButtonElement}
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
              <p className="expander-list-title text-weight-semibold">
                {listTitle}
              </p>
              {!hasInformationElement && hasListTitle && closeButtonElement}
            </>
          )}
          <ul className="expander-list-item-wrapper">
            {!hasInformationElement && !hasListTitle && closeButtonElement}
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
