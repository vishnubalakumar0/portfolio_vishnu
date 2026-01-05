import resume from "../assets/resume.pdf";
import { MapPin, Mail, FileText } from "lucide-react";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h1
      
          initial={{opacity:0, y:-20}}
          whileInView={{ opacity:1 , y:0}}
          transition={{ duration: 1 ,delay:0.3}}
      className="my-10 text-center font-semibold text-4xl">Get In Touch</motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
        
            initial={{opacity:0, x:-100}}
          whileInView={{ opacity:1 , x:0}}
          transition={{ duration: 1.5 ,delay:0.5}}
        className="my-4 flex justify-center items-center gap-2 hover:text-blue-400 ">
                     <MapPin size={18} />

          <a
            href="https://www.google.com/maps/place/Coimbatore,+Tamil+Nadu"
            target="_blank"
            className=""
          >
            Coimbatore, Tamil Nadu, India
          </a>
        </motion.p>

        <motion.div
        
          initial={{opacity:0, x:100}}
          whileInView={{ opacity:1 , x:0}}
          transition={{ duration: 1.5 ,delay:0.6}}
        >
        <a

        
          
          href="mailto:vishnub9842@gmail.com"
          className="flex justify-center items-center gap-2  text-gray-200 hover:text-green-400 transition"
          rel="noopener noreferrer"
        >
          <Mail size={18} /> vishnub9842@gmail.com
        </a>
</motion.div>

             <motion.div
                initial={{opacity:0, y:20}}
          whileInView={{ opacity:1 , y:0}}
          transition={{ duration: 1.5 ,delay:0.7}}
             >
        <motion.p

      
          
        className="my-4 flex justify-center items-center gap-2 hover:text-red-400 transition">
          <FileText size={18} />
          <motion.a
           
          href={resume} target="_blank" className="text-sm font-semibold">
            View Resume
          </motion.a>
        </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
