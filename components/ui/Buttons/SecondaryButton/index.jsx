import Link from "next/link";
import style from "./style.module.scss";

export default function SecondaryButton(props) {
  return (
    <Link href={props.link || "#"}>
      <a>{props.children || "Secondary Button"}</a>
    </Link>
  );
}
