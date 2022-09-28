import Link from "next/link";
import Image from "next/image";
import Style from "./style.module.scss";
export default function Header(props) {
  const imageDimensions = props.imageDimensions;
  return (
    <header>
      <Image
        src={props.image || "/images/logo-h.png"}
        width={imageDimensions.width || 500}
        height={imageDimensions.height || 300}
      />
      <nav>
        <ul>
          <li>
            <Link href="#">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>ABOUT US</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>SERVICES</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>PROJECTS</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>DOWNLOADS</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>CONTACT</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
