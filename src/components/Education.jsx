import { EDUCATION } from "../constants";
import { motion } from "motion/react";



const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
       initial={{opacity:0, y:20}}
          whileInView={{ opacity:1 , y:0}}
          transition={{ duration: 1 ,delay:0.3}}
      className="my-20 text-center tracking-tight text-4xl">Education</motion.h1>
      <div>
        {EDUCATION.map((Education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.p
               initial={{opacity:0, x:-100}}
          whileInView={{ opacity:1 , x:0}}
          transition={{ duration: 1.5 , delay:0.5}}
              className="mb-2  text-sm text-neutral-400">{Education.year}</motion.p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
               initial={{opacity:0, x:100}}
          whileInView={{ opacity:1 , x:0}}
          transition={{ duration: 1.5 , delay:0.5}}
              className="mb-2 font-semibold">
                {Education.course} -{" "}
                <span
             
                className="text-sm text-purple-100">
                  {Education.college}
                </span>
              </motion.h6>
              <motion.p
                  initial={{opacity:0, x:100}}
          whileInView={{ opacity:1 , x:0}}
          transition={{ duration: 1.5 , delay:0.6}}
              className="mb-4 text-neutral-400">{Education.description}</motion.p>
              <div className="flex flex-wrap  mt-4 ">
                {Education.technologies.map((tech, index) => (
                  <motion.span

                   initial={{opacity:0, x:100}}
          whileInView={{ opacity:1 , x:0}}
          transition={{ duration: 1.5 , delay:0.7}}
                    key={index}
                    className="mr-2 mt-4   rounded bg-neutral-900 
                    px-2 py-1 text-sm text-red-600 "
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
