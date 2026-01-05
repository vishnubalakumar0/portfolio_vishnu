import img from "../assets/aboutimg.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";




const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{opacity:0, y:20}}
          whileInView={{ opacity:1 , y:0}}
          transition={{ duration: 1 ,delay:0.4}}
      className="my-20 text-center  sm:text-4xl ">
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
          initial={{opacity:0, x:-100}}
          whileInView={{ opacity:1 , x:0}}
          transition={{ duration: 1 , delay:0.5}}
          className="flex items-center justify-center">
            <img
              
              src={img}
              alt="l"
              className="rounded-2xl w-56 sm:w-64 md:w-72 lg:w-120"
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              initial={{opacity:0, x:100}}
          whileInView={{ opacity:1 , x:0}}
          transition={{ duration: 1 , delay:0.5}}
            className="my-2 max-w-xl py-6 text- text-neutral-200  tracking-widest text-lg ">{ABOUT_TEXT}</motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
