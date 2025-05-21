import { useState } from "react";
import "./projectCard.scss";
import LabelProject from "./LabelProject";
import ImageCard from "./ImageCard";

function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);

  const handleClickCard = () => {
    setFlipped((prev) => !prev);
  };

  const handleClickLink = (e) => {
    e.stopPropagation(); // Empêche de retourner la carte quand on clique sur le lien
  };

  return (
    <div className={`flip-card ${flipped ? "flipped" : ""}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front" onClick={handleClickCard}>
          <div className="card-front-left">
            <ImageCard images={project.images} />
          </div>
          <div className="card-front-right">
            <p className="title">{project.title}</p>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="card-back-left">
            <p className="description" onClick={handleClickCard}>
              {project.description}
            </p>
          </div>
          <div className="card-back-right" onClick={handleClickCard}>
            <LabelProject labels={project.tags} />
            <div className="linksContainer">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClickLink}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
