import Link from "next/link";
import Layout from "../components/Layout";
import NavigationBar from "../components/NavigationBar";
import styles from "../styles/Home.module.scss";

const IndexPage = () => {
  return (
    <Layout
      title="Home | Next.js + TypeScript Example"
      showExtendedNavbar={false}
    >
      <div className={styles.homeContainer}>
        <h1>
          Hi, <br /> i'm Ruben, <br />
          web developer
        </h1>
        <span className={styles.rolesSpanColor}>
          Front End | Back End | Mobile
        </span>

        <Link href="/contact">
          <div className={styles.button}>
            <a>Contact</a>
          </div>
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
