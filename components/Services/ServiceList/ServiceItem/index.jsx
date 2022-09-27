import Image from "next/image";
import Style from "./style.module.scss";
import PrimaryButton from "../../../ui/Buttons/PrimaryButton";

export default function ServiceItem(props) {
  const { imageDimensions } = props;
  return (
    <li key={props.key}>
      <h3>{props.title || "ServiceItem"}</h3>
      <p>{props.content || "Service Description goes Here."}</p>
      <PrimaryButton link={props.link}>{props.buttonText}</PrimaryButton>
      <Image
        src={props.image || "/images/logo-h.png"}
        alt={props.title}
        width={300}
        height={300}
        className={`${Style.image} ${props.imageCSS}`}
      />
    </li>
  );
}
