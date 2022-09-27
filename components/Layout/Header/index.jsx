import Link from "next/link";
import Style from "./style.module.scss";
export default function Header(props) {
  return (
    <header>
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
