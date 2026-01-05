import pic from "../assets/profile.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "motion/react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pt-8 sm:pt-12 lg:pt-0 pb-8 sm:pb-10 lg:pb-16 lg:mb-35">
      <div className="flex flex-col-reverse gap-y-4 sm:gap-y-6 lg:gap-y-0 lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-4 sm:px-6 lg:px-8">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-2 sm:mb-3 lg:mb-8 text-center lg:text-left"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                Vishnu
              </span>
            </motion.h1>
            <motion.span
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-400 via-red-500 to-pink-400 bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold tracking-tight text-transparent mb-2 sm:mb-3 text-center lg:text-left"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 1.7,
                ease: "easeOut",

              }}
              className="my-0 max-w-xl py-1 sm:py-2 lg:py-6 text-neutral-200 text-base sm:text-lg leading-[1.6] lg:text-left   "
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:-mt-10">
            <motion.img
             initial={{x:100 , opacity:0}}
        animate={{x:0 , opacity:1}}
        transition={{duration:1, delay:2}}
              src={pic}
              alt="vishnu"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              className="w-56 sm:w-64 md:w-72 lg:w-[420px] rounded-2xl select-none pointer-events-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
