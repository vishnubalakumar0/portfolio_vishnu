import pic from "../assets/profile.png";
import {HERO_CONTENT} from "../constants";


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
            Vishnu B
          </h1>
          <span className="bg-linear-to-r from-pink-300 via-slate-50 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
            Full stack Developer
          </span>
          <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
            {HERO_CONTENT}
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
              <img height={450} width={450} src={pic} alt="h" className="rounded-2xl"/>
          </div>
        </div>
      </div>
        

    </div>
  );
};

export default Hero;
