import Layout from "../components/Layout";
import styles from "../styles/About.module.scss";

const AboutPage = () => {
  return (
    <Layout
      title="Home | Next.js + TypeScript Example"
      showExtendedNavbar={true}
    >
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
        <p className="white textWidth textAlRight">
          I enjoy building data rich web applications and learning about new
          stuff such as app and game development. I'm also very motivated to
          improve my programming knowledge and take on new challenges.
        </p>
        <div
          className="bgGray"
          style={{ width: 250, height: 250, borderRadius: 360 }}
        ></div>
      </div>
    </Layout>
  );
};

export default AboutPage;
