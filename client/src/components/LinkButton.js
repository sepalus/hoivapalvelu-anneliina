import React from "react";
import { HashLink } from "react-router-hash-link";
import classNames from "classnames";
import "./Button.scss";
import Button from "./Button";

export default function LinkButton(props) {
  const { externalLinkPath, linkPath } = props;
  return (
    <>
      {externalLinkPath ? (
        <a href={externalLinkPath} target="_blank" rel="noreferrer noopener">
          <Button {...props} onClick={(e) => e.preventDefault()}></Button>
        </a>
      ) : linkPath ? (
        <HashLink to={linkPath}>
          <Button {...props}></Button>
        </HashLink>
      ) : (
        <Button {...props}></Button>
      )}
    </>
  );
}
