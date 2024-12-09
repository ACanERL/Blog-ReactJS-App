import '../css/ProjectCard.css'
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <img src={project.image} alt={project.title} className="project-image" />
      <p className="project-description">{project.description}</p>
    </div>
  );
}

export default ProjectCard;