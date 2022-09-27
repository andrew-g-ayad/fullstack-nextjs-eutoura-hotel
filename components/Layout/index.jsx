import Link from "next/link";
import { Fragment } from "react";

import Footer from "./Footer";
import Header from "./Header";

import Style from "./style.module.scss";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
}
