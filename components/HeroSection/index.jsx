import style from "./style.module.scss";

import Image from "next/image";

export default function HeroSection(props) {
  const imageDimensions = props.imageDimensions || { width: 300, height: 300 };
  return (
    <section>
      <h1>{props.heading || "Here we go!"}</h1>
      <Image
        width={imageDimensions.width}
        height={imageDimensions.height}
        src={props.image || "/images/back-view-beautiful-tourist.jpg"}
      />
    </section>
  );
}
