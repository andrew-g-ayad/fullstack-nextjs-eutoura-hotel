import SecondaryButton from "../ui/Buttons/SecondaryButton";
import style from "./style.module.scss";

export default function callToActionBar(props) {
  return (
    <div>
      <p>{props.message || "Message goes Here..."}</p>
      <SecondaryButton>some text for testing purpose</SecondaryButton>
    </div>
  );
}
