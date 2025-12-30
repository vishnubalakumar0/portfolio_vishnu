import logo from "../assets/image.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {motion} from "motion/react";

const Nav = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex shrink-0 items-center">
        <img src={logo} alt="lo" className="mx-2 w-10" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
    initial={{ opacity: 1, y: 0 }}
    whileHover={{ opacity: 1, y: -15 }}
    transition={{ duration: 0.25 }}
        href="https://www.linkedin.com/in/vishnubalakumar" target="_blank">
          <FaLinkedin />
        </motion.a>
        <motion.a
          initial={{ opacity: 1, y: 0 }}
          whileHover={{ opacity: 1, y: -15 }}
          transition={{ duration: 0.25 }}
          href="https://github.com/vishnubalakumar0" target="_blank">
          {" "}
          <FaGithub />
        </motion.a>

        <motion.a
          initial={{ opacity: 1, y: 0 }}
          whileHover={{ opacity: 1, y: -15 }}
          transition={{ duration: 0.25 }}
          href="https://www.instagram.com/sweet_boy_vichu" target="_blank">
          {" "}
          <FaInstagram />
        </motion.a>

        <motion.a
          initial={{ opacity: 1, y: 0 }}
          whileHover={{ opacity: 1, y: -15 }}
          transition={{ duration: 0.25 }}
          href="https://x.com/?lang=en-in" target="_blank">
          {" "}
          <FaXTwitter />
        </motion.a>
      </div>
    </nav>
  );
};

export default Nav;
