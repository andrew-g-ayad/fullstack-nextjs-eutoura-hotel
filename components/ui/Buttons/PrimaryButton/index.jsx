import Link from "next/link";

export default function PrimaryButton(props) {
  return (
    <Link href={props.link || "#"}>
      <a>{props.children || "Primary Button"}</a>
    </Link>
  );
}
