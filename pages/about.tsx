import Layout from "../components/Layout";
import styles from "../styles/About.module.scss";

const AboutPage = () => {
  return (
    <Layout title="About | Ruben Winant" showExtendedNavbar={true}>
      <div className={styles.aboutContainer}>
        <h1>
          <div className="verticalText">
            <span className="red">A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
          </div>
        </h1>
        <p className="white textAlRight">
          I'm Ruben and i enjoy designing and developing modern, data driven web
          and mobile applications.
        </p>
        <div className={styles.selfie}></div>
      </div>
    </Layout>
  );
};

export default AboutPage;
