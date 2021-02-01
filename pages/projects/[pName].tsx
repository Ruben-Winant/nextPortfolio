import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/ProjectDesc.module.scss";
import projectsData from "../../utils/projectsData.json";
import { useEffect, useState } from "react";
import ScreenshotCard from "../../components/ScreenshotCard";

const Project = () => {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);
  const [keywords, setKeywords] = useState<string>("");
  const [project, setProject] = useState<Project>();
  const { pName } = router.query;

  interface Project {
    name: string;
    description: string;
    keywords: string[];
    liveLink: string;
    github: string;
    client: string;
    mission: string;
    role: string;
    approach: string;
    pictures: [];
    cardImg: string;
  }

  useEffect(() => {
    const currProject = projectsData.filter((p) => p.name === pName)[0];

    let i = 0;
    const imgs: any = [];
    {
      currProject.pictures.map((pic) => {
        imgs.push(
          <ScreenshotCard
            key={pic.pictureName}
            img={pic.pictureName}
            imgDesc={pic.pictureDescription}
            right={i % 2 === 0 ? false : true}
          />
        );
        i++;
      });
    }
    setImages(imgs);
    setKeywords(currProject.keywords.map((t) => " " + t).toString());
    setProject(project);
  }, []);

  return project ? (
    <Layout
      title="Home | Next.js + TypeScript Example"
      showExtendedNavbar={true}
    >
      <div className={styles.projectDescContainer}>
        <h1>{project.name}</h1>
        <div className={styles.detailsContainer}>
          <div className={styles.detailsRow}>
            <h3>CLIENT</h3>
            <p>{project.client}</p>
          </div>
          <div className={styles.detailsRow}>
            <h3>MISSION</h3>
            <p>{project.mission}</p>
          </div>
          <div className={styles.detailsRow}>
            <h3>APPROACH</h3>
            <p>{project.approach}</p>
          </div>
          <div className={styles.detailsRow}>
            <h3>MY ROLE</h3>
            <p>{project.role}</p>
          </div>
          <div className={styles.detailsRow}>
            <h3>TECHNOLOGIES</h3>
            <a>{keywords}</a>
          </div>
          <div className={styles.detailsRow}>
            <h3>LINK</h3>
            <a>{project.liveLink}</a>
          </div>
        </div>

        <div>
          <h2>GALLERY</h2>
          {images}
        </div>
      </div>
    </Layout>
  ) : null;
};

export default Project;
