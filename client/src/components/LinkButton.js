import React from "react";
import { HashLink } from "react-router-hash-link";
import classNames from "classnames";
import "./Button.scss";
import Button from "./Button";

export default function LinkButton(props) {
  const { linkPath } = props;
  return (
    <HashLink to={linkPath}>
      <Button {...props}></Button>
    </HashLink>
  );
}
