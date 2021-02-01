import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import {} from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { IoBookSharp, IoMail } from "react-icons/io5";
import styles from "../styles/NavBar.module.scss";

interface props {
  extend: boolean;
}

const NavigationBar = ({ extend }: props) => {
  const router = useRouter();

  return (
    <div className={styles.navBarInner}>
      <Link href="/">
        <a className={router.pathname == "/" ? "navElActive" : ""}>
          <AiFillHome className={styles.navIcon} />
          <div style={{ display: extend ? "flex" : "none" }}>
            <span>H</span>
            <span>O</span>
            <span>M</span>
            <span>E</span>
          </div>
        </a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "navElActive" : ""}>
          <BsFillPersonFill className={styles.navIcon} />
          <div style={{ display: extend ? "flex" : "none" }}>
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
          </div>
        </a>
      </Link>
      <Link href="/skills">
        <a className={router.pathname === "/skills" ? "navElActive" : ""}>
          <IoBookSharp className={styles.navIcon} />
          <div style={{ display: extend ? "flex" : "none" }}>
            <span>S</span>
            <span>K</span>
            <span>I</span>
            <span>L</span>
            <span>L</span>
            <span>S</span>
          </div>
        </a>
      </Link>
      <Link href="/projects">
        <a className={router.pathname === "/projects" ? "navElActive" : ""}>
          <FaEye className={styles.navIcon} />
          <div style={{ display: extend ? "flex" : "none" }}>
            <span>P</span>
            <span>R</span>
            <span>O</span>
            <span>J</span>
            <span>E</span>
            <span>T</span>
            <span>S</span>
          </div>
        </a>
      </Link>
      <Link href="/contact">
        <a className={router.pathname === "/contact" ? "navElActive" : ""}>
          <IoMail className={styles.navIcon} />
          <div style={{ display: extend ? "flex" : "none" }}>
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>T</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default NavigationBar;
