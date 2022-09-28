import Image from "next/image";
import { Fragment } from "react";
import style from "./style.module.scss";

export default function companyMessage(props) {
  return (
    <Fragment>
      <Image />
      <h2>{props.title || "Our Message"}</h2>
      <p>{props.message || "Message goes Here..."}</p>
    </Fragment>
  );
}
