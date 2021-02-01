import React, { ReactNode } from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.scss";
import NavigationBar from "./NavigationBar";
import { AiFillBulb } from "react-icons/ai";

type Props = {
  children?: ReactNode;
  title?: string;
  showExtendedNavbar: boolean;
};

const Layout = ({
  children,
  title = "This is the default title",
  showExtendedNavbar,
}: Props) => (
  <div className={styles.outerContainer}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={styles.header}>
      <nav
        className={styles.navBar}
        style={{ display: showExtendedNavbar ? "flex" : "none" }}
      >
        <NavigationBar extend={false} />
      </nav>
      <button>
        <AiFillBulb className={styles.themeIcon} />
      </button>
    </header>
    <div className={styles.outerContentContainer}>{children}</div>
  </div>
);

export default Layout;
