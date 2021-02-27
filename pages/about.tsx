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
          I enjoy building data rich web applications and learning about new
          stuff such as app and game development. I'm also very motivated to
          improve my programming knowledge and take on new challenges.
        </p>
        <div className={styles.selfie}></div>
      </div>
    </Layout>
  );
};

export default AboutPage;
