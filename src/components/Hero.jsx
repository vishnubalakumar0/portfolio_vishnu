import pic from "../assets/profile.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center ml-8 lg:items-start">
            <h1 className="text-6xl font-poppins font-bold leading-tight lg:mb-8">
              Hi, I'm{" "}
              <span className="bg-linear-to-r from-purple-500 to-blue-500  text-transparent  bg-clip-text">
                Vishnu
              </span>
            </h1>
            <span className="bg-linear-to-r from-pink-400 via-red-500 to-pink-400 bg-clip-text text-4xl font-poppins font-bold  tracking-tight text-transparent mb-3">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6  text-white font-thin tracking-wide  text-lg">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex  justify-center -mt-10">
            <img
              src={pic}
              alt="h"
              height={500}
              width={500}
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              className="rounded-2xl select-none pointer-events-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
