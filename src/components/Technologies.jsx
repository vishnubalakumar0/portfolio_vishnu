import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs , FaGitAlt} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiFirebase,
  SiTailwindcss,
  SiTableau,
  SiJupyter,
} from "react-icons/si";
import powerbiicon from "../assets/powerbi.svg";
import { motion } from "motion/react";
import { animate } from "motion";


const vari = (duration) => ({
  initial: {y:-10},
  animate: {
    y:[10,-10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})



const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
     initial={{opacity:0, y:20}}
          whileInView={{ opacity:1 , y:0}}
          transition={{ duration: 1 ,delay:0.3}}
      className="my-20 text-center  tracking-tight text-4xl    "    >Technologies</motion.h1>
      <motion.div
        initial={{opacity:0, x:-100}}
          whileInView={{ opacity:1 , x:0}}
          transition={{ duration: 1.5 , delay:0.5}}
      className="flex flex-wrap items-center justify-center gap-4  ">
        <motion.div
        variants={vari(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
        variants={vari(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
        variants={vari(1.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
        variants={vari(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-600" />
        </motion.div>
        <motion.div
        variants={vari(3.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGitAlt className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
        variants={vari(6)}
        initial="initial"
        animate="animate"
        
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFirebase className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
        variants={vari(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-sky-400" />
        </motion.div>
       
        <motion.div
        variants={vari(4.3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center gap-2">
          <img
            src={powerbiicon}
            alt="Power BI"
            className="w-18 h-18"
            draggable="false"
          />
        </motion.div>

        <motion.div
    variants={vari(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTableau className="text-7xl text-sky-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
