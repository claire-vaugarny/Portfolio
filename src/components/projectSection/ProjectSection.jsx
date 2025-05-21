import './Projectsection.scss';

import ProjectCard from './ProjectCard';

import projects from "../../datas.json";

function Projectsection() {
  return (
    <section className="projectSection" id="ProjectSection">
      <h2>Projets</h2>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}

export default Projectsection;