import React, { ReactNode } from "react";
import { Head } from "next/document";
import styles from "../styles/Layout.module.scss";
import NavigationBar from "./NavigationBar";

type Props = {
  children?: ReactNode;
  title?: string;
  showExtendedNavbar: boolean;
};

const Layout = ({
  children,
  title = "Ruben Winant",
  showExtendedNavbar,
}: Props) => (
  <div className={styles.outerContainer}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="I design and develop modern data driven web and mobile applications."
      />
    </Head>
    <header className={styles.header}>
      <nav
        className={styles.navBar}
        style={{ display: showExtendedNavbar ? "flex" : "none" }}
      >
        <NavigationBar extend={false} />
      </nav>
    </header>
    <div className={styles.outerContentContainer}>{children}</div>
  </div>
);

export default Layout;
