import style from "./style.module.scss";

import React from "react";

export default function SectionPlaceholder(props) {
  return <section className={props.style}>{props.children}</section>;
}
