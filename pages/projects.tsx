import projectsData from "../utils/projectsData.json";
import Layout from "../components/Layout";
import styles from "../styles/Projects.module.scss";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <Layout title="Projects | Ruben Winant" showExtendedNavbar={true}>
      <div className={styles.projectsContainer}>
        <h1>
          <div className="verticalText">
            <span className="red">P</span>
            <span>R</span>
            <span>O</span>
            <span>J</span>
            <span>E</span>
            <span>C</span>
            <span>T</span>
            <span>S</span>
          </div>
        </h1>

        <div className={styles.projectCardList}>
          {projectsData.map((p) => (
            <ProjectCard
              key={p.name}
              cardImg={p.cardImg}
              name={p.name}
              tech={p.keywords}
              desc={p.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
