import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 tracking-tight text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((projects, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={projects.image}
                alt={projects.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <div className=" flex flex-wrap  w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{projects.title}</h6>
              <p className="mb-4 text-neutral-400"> {projects.description}</p>
             <div className="flex flex-wrap gap-y-4">
              {projects.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-600"
                  key={index}
                >
                  {tech}
                </span>
              ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
