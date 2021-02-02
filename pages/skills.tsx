import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {
  SiAdobexd,
  SiCss3,
  SiDotNet,
  SiJson,
  SiNextDotJs,
  SiTypescript,
} from "react-icons/si";
import { DiMysql, DiReact, DiScrum } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import Layout from "../components/Layout";
import SkillIcon from "../components/SkillIcon";
import { skillType } from "../interfaces";
import styles from "../styles/Skills.module.scss";
import { useState } from "react";

const SkillsPage = () => {
  const [selType, setType] = useState<skillType>();

  return (
    <Layout
      title="Home | Next.js + TypeScript Example"
      showExtendedNavbar={true}
    >
      <div className={styles.skillsContainer}>
        <div className={styles.skillsHeader}>
          <h1>
            <div className="verticalText">
              <span className="red">S</span>
              <span>K</span>
              <span>I</span>
              <span>L</span>
              <span>L</span>
              <span>S</span>
            </div>
          </h1>
        </div>

        <ul className="white">
          <li
            onClick={() => setType(skillType.BE)}
            className={selType === skillType.BE ? styles.activeSkillset : ""}
          >
            Back End
          </li>
          <li
            onClick={() => setType(skillType.FE)}
            className={selType === skillType.FE ? styles.activeSkillset : ""}
          >
            Front End
          </li>
          <li
            onClick={() => setType(skillType.OT)}
            className={selType === skillType.OT ? styles.activeSkillset : ""}
          >
            Other
          </li>
        </ul>

        <div className={styles.skillsDisplay}>
          <SkillIcon
            active={selType === skillType.FE ? true : false}
            name="HTML"
          >
            <AiFillHtml5
              color={selType === skillType.FE ? "#ff3347" : "#FFF"}
              className={styles.skillIcon}
            />
          </SkillIcon>

          <SkillIcon
            active={selType === skillType.OT ? true : false}
            name="React Native"
          >
            <DiReact
              color={selType === skillType.OT ? "#ff3347" : "#FFF"}
              className={styles.skillIcon}
            />
          </SkillIcon>

          <SkillIcon
            active={selType === skillType.FE ? true : false}
            name="React"
          >
            <DiReact
              color={selType === skillType.FE ? "#ff3347" : "#FFF"}
              className={styles.skillIcon}
            />
          </SkillIcon>

          <SkillIcon
            active={selType === skillType.OT ? true : false}
            name="Javascript"
          >
            <IoLogoJavascript
              color={selType === skillType.OT ? "#ff3347" : "#FFF"}
              className={styles.skillIcon}
            />
          </SkillIcon>

          <SkillIcon
            active={selType === skillType.BE ? true : false}
            name="JSON"
          >
            <SiJson
              color={selType === skillType.BE ? "#ff3347" : "#FFF"}
              className={styles.skillIcon}
            />
          </SkillIcon>

          <SkillIcon
            active={selType === skillType.OT ? true : false}
            name="Adobe XD"
          >
            <SiAdobexd
              color={selType === skillType.OT ? "#ff3347" : "#FFF"}
              className={styles.skillIcon}
            />
          </SkillIcon>

          <SkillIcon
            active={selType === skillType.OT ? true : false}
            name="Typescript"
          >
            <SiTypescript
              color={selType === skillType.OT ? "#ff3347" : "#FFF"}
              className={styles.skillIcon}
            />
          </SkillIcon>

          <SkillIcon
            active={selType === skillType.BE ? true : false}
            name="REST"
          ></SkillIcon>

          <SkillIcon
            active={selType === skillType.FE ? true : false}
            name="Next.js"
          >
            <SiNextDotJs
              color={selType === skillType.FE ? "#ff3347" : "#FFF"}
              className={styles.skillIcon}
            />
          </SkillIcon>

          <SkillIcon
            active={selType === skillType.BE ? true : false}
            name=".Net Core"
          >
            <SiDotNet
              color={selType === skillType.BE ? "#ff3347" : "#FFF"}
              className={styles.skillIcon}
            />
          </SkillIcon>

          <SkillIcon
            active={selType === skillType.OT ? true : false}
            name="Git"
          >
            <AiFillGithub
              color={selType === skillType.OT ? "#ff3347" : "#FFF"}
              className={styles.skillIcon}
            />
          </SkillIcon>

          <SkillIcon
            active={selType === skillType.OT ? true : false}
            name="Scrum"
          >
            <DiScrum
              color={selType === skillType.OT ? "#ff3347" : "#FFF"}
              className={styles.skillIcon}
            />
          </SkillIcon>

          <SkillIcon
            active={selType === skillType.FE ? true : false}
            name="CSS"
          >
            <SiCss3
              color={selType === skillType.FE ? "#ff3347" : "#FFF"}
              className={styles.skillIcon}
            />
          </SkillIcon>

          <SkillIcon
            active={selType === skillType.BE ? true : false}
            name="SQL"
          >
            <DiMysql
              color={selType === skillType.BE ? "#ff3347" : "#FFF"}
              className={styles.skillIcon}
            />
          </SkillIcon>
        </div>
      </div>
    </Layout>
  );
};

export default SkillsPage;
