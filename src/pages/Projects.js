import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div className='projects'>
       
       <div className='text'>
       <h1>Projelerim</h1>
       </div>
      <div className='project-container'>
       {projects.map(project => (
      <ProjectCard key={project.id} project={project} />
       ))}
       </div>
       <div className='project-container'>
       {projects.map(project => (
      <ProjectCard key={project.id} project={project} />
       ))}
       </div>
      </div>
   
  );
}

export default Projects;
