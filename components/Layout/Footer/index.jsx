import Link from "next/link";
import Style from "./style.module.scss";

import React from "react";

export default function Footer() {
  return (
    <footer>
      <p>
        Demo Site Designed and Developed By&nbsp;
        <a href="https://www.linkedin.com/in/andrew-g-ayad/" target="_blank">
          {" "}
          ANDREW G. AYAD
        </a>
        &nbsp;© 2022. All rights reserved.
      </p>
    </footer>
  );
}
