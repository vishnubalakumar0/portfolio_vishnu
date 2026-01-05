import { PROJECTS } from "../constants";
import { motion } from "motion/react";



const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{opacity:0, y:-20}}
          whileInView={{ opacity:1 , y:0}}
          transition={{ duration: 1 ,delay:0.3}}
      className="my-20 tracking-tight text-center text-4xl">Projects</motion.h1>
      <div>
        {PROJECTS.map((projects, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.img

                initial={{opacity:0, x:-100}}
          whileInView={{ opacity:1 , x:0}}
          transition={{ duration: 1.5 , delay:0.5}}
                src={projects.image}
                alt={projects.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <div className=" flex flex-wrap  w-full max-w-xl lg:w-3/4">
              <motion.h6
                initial={{opacity:0, x:100}}
          whileInView={{ opacity:1 , x:0}}
          transition={{ duration: 1.5 , delay:0.5}}
              className="mb-2 font-semibold">{projects.title}</motion.h6>
              <motion.p 
                initial={{opacity:0, x:100}}
          whileInView={{ opacity:1 , x:0}}
          transition={{ duration: 1.5 , delay:0.7}}
              className="mb-4 text-neutral-400"> {projects.description}</motion.p>
             <motion.div
               initial={{opacity:0, x:100}}
          whileInView={{ opacity:1 , x:0}}
          transition={{ duration: 1.5 , delay:0.9}}
             className="flex flex-wrap gap-y-4">
              {projects.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-600"
                  key={index}
                >
                  {tech}
                </span>
              ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
