import Link from "next/link";
import {} from "react";
import styles from "../styles/ProjectCard.module.scss";

interface props {
  name: string;
  tech: string[];
  cardImg: string;
  desc: string;
}

const ProjectCard = ({ cardImg, name, tech, desc }: props) => {
  let keywords = tech.map((t) => " " + t).toString();
  return (
    <div className={styles.cardContainer}>
      <div className={styles.innerCardContainer}>
        <div
          onClick={() => alert()}
          className={styles.innerCardFront}
          style={{
            backgroundImage: `url('./` + cardImg + `')`,
            backgroundSize: "contain",
          }}
        >
          <div className={styles.cardHeader}>
            <h2>{name.toUpperCase()}</h2>
            <p>{desc}</p>
          </div>

          <p>{keywords}</p>
        </div>

        <div className={styles.innerCardBack}>
          <div className={styles.circleBg}></div>
          <Link href={`/projects/${encodeURIComponent(name)}`}>
            <a className={styles.backSideButton}>Check it out!</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
