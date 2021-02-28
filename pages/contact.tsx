import { FormEvent, FormEventHandler, useState } from "react";
import {
  FaCodepen,
  FaDribbble,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Layout from "../components/Layout";
import styles from "../styles/Contact.module.scss";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_wnle8nq",
        "template_j5vq5p4",
        {
          from_name: name,
          to_name: "ruben",
          reply_to: email,
          message: message,
        },
        "user_9NAr7PjI9d03CvXxDc9sT"
      )
      .then(({ status }) => {
        if (status === 200) {
          alert(
            "Thanks for messaging me! \nI will try to get back to you as quickly as possible."
          );
        } else {
          alert(
            "It seems there was a problem with the mailing service. \nYou can contact me on ruben.winant@hotmail.com."
          );
        }
      });
  };

  return (
    <Layout title="Contact | Ruben Winant" showExtendedNavbar={true}>
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
            Use to form below to contact me and i'll try to get back to you as
            quickly as possible.
          </p>
          <form>
            <div className={styles.formRow}>
              <div className={styles.formInput}>
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(val) => setName(val.currentTarget.value)}
                />
              </div>
              <div className={styles.formInput}>
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(val) => setEmail(val.currentTarget.value)}
                />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formInput}>
                <label htmlFor="subject">Subject</label>
                <input
                  name="subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(val) => setSubject(val.currentTarget.value)}
                />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formInput}>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(val) => setMessage(val.currentTarget.value)}
                />
              </div>
            </div>
            <div className={styles.formRow}>
              <button onClick={(e) => onSubmitForm(e)} type="submit">
                Send
              </button>
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

export default ContactPage;
