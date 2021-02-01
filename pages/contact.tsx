import {
  FaCodepen,
  FaDribbble,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Layout from "../components/Layout";
import styles from "../styles/Contact.module.scss";

const AboutPage = () => {
  return (
    <Layout
      title="Home | Next.js + TypeScript Example"
      showExtendedNavbar={true}
    >
      <div className={styles.contactContainer}>
        <h1>
          <div className="verticalText">
            <span className="red">C</span>
            <span>O</span>
            <span>N</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>T</span>
          </div>
        </h1>
        <div className={styles.formContainer}>
          <p>
            I'm interested in new opportunities. However if you have any other
            questions, feel free to contact me using the form below.
          </p>
          <form>
            <div className={styles.formRow}>
              <div className={styles.formInput}>
                <label htmlFor="name">Name</label>
                <input name="name" type="text" required />
              </div>
              <div className={styles.formInput}>
                <label htmlFor="email">Email</label>
                <input name="email" type="email" required />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formInput}>
                <label htmlFor="subject">Subject</label>
                <input name="subject" type="text" required />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formInput}>
                <label htmlFor="message">Message</label>
                <textarea name="message" required rows={5} />
              </div>
            </div>
            <div className={styles.formRow}>
              <button>Send</button>
            </div>
          </form>
        </div>
        <div className={styles.socialsBar}>
          <a href="https://www.dribbble.com/rubenw">
            <FaDribbble className={styles.socialIcon} />
          </a>
          <a href="https://www.linkedin.com/in/ruben-winant/">
            <FaLinkedinIn className={styles.socialIcon} />
          </a>
          <a href="https://twitter.com/ruben_winant">
            <FaTwitter className={styles.socialIcon} />
          </a>
          <a href="https://github.com/Ruben-Winant">
            <FaGithub className={styles.socialIcon} />
          </a>
          <a href="https://codepen.io/ruben_winant">
            <FaCodepen className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
