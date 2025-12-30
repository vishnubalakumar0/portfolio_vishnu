import pic from "../assets/profile.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center ml-8 lg:items-start">
            <h1 className="text-6xl font-poppins font-bold leading-tight lg:mb-5">
              Hi, I'm{" "}
              <span className="bg-linear-to-r from-purple-400 to-blue-500  text-transparent  bg-clip-text">
                Vishnu
              </span>
            </h1>
            <span className="bg-linear-to-r from-pink-600 via-red-500 to-pink-500 bg-clip-text text-4xl tracking-tight text-transparent mb-3">
              Full stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 text-neutral-200 tracking-widest  text-lg">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex  justify-center -mt-10">
            <img
              height={500}
              width={500}
              src={pic}
              alt="h"
              className="rounded-2xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
