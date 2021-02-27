import Link from "next/link";
import Layout from "../components/Layout";
import NavigationBar from "../components/NavigationBar";
import styles from "../styles/Home.module.scss";

const IndexPage = () => {
  return (
    <Layout title="Home | Ruben Winant" showExtendedNavbar={false}>
      <div className={styles.homeContainer}>
        <h1>
          Hi, <br /> i'm Ruben, <br />
          web developer
        </h1>
        <span className={styles.rolesSpanColor}>
          Front End | Back End | Mobile
        </span>

        <Link href="/contact" passHref>
          <a className={styles.button}>Contact</a>
        </Link>

        <NavigationBar extend={true} />
      </div>

      <div>
        <div className={styles.rect} />
        <div className={styles.rect2} />
      </div>
    </Layout>
  );
};

export default IndexPage;
