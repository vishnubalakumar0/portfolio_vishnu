import logo from "../assets/image.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";

const Nav = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex shrink-0 items-center">
        <img src={logo} alt="lo" className="mx-2 w-10" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/vishnubalakumar"
          target="_blank"
          className="block"
        >
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.20 }}
            className="cursor-pointer p-px"
          >
            <FaLinkedin className="text-2xl hover:text-blue-500" />
          </motion.div>
        </a>

        <a
          href="https://github.com/vishnubalakumar0"
          target="_blank"
          className="block"
        >
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.20 }}
            className="cursor-pointer p-px"
          >
            <FaGithub className="text-2xl hover:text-purple-500" />
          </motion.div>
        </a>

        <a
          href="https://www.instagram.com/sweet_boy_vichu"
          target="_blank"
          className="block"
        >
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.20 }}
            className="cursor-pointer p-px"
          >
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </motion.div>
        </a>

        <a href="https://x.com/?lang=en-in" target="_blank" className="block">
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.20 }}
            className="cursor-pointer p-px"
          >
            <FaXTwitter className="text-2xl hover:text-sky-400" />
          </motion.div>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
