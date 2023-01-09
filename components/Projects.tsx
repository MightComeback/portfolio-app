import { ProjectsData } from "../utils/data";
import ProjectShowcase from "./(reusable)/ProjectShowcase";

const Projects = () => {
  return (
    <div
      id="projects-section"
      className="w-full bg-main-neon-pink overflow-hidden"
    >
      <div className="center flex flex-col items-center">
        <h2 className="smoky-blue-text my-4 text-xl">My Projects</h2>
        <div className="flex flex-wrap md:flex-row flex-col justify-between">
          {ProjectsData.map((project, id) => (
            <div key={id} className="my-8 md:basis-1/2 gap-4">
              <ProjectShowcase
                title={project.title}
                description={project.description}
                image={project.image}
                tech={project.tech}
                details={project.details}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
