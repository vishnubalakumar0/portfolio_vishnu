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

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center  tracking-tight text-4xl    "    >Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4  ">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGitAlt className="text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFirebase className="text-7xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-sky-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJupyter className="text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center gap-2">
          <img
            src={powerbiicon}
            alt="Power BI"
            className="w-18 h-18"
            draggable="false"
          />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTableau className="text-7xl text-sky-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
