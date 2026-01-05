import { CERTIFICATE } from "../constants";
import { motion } from "motion/react";

const Certificate = () => {
  const leftCerts = CERTIFICATE.slice(0, 3);
  const rightCerts = CERTIFICATE.slice(3, 6);

  return (
    <div className="border-b border-neutral-900 py-16">
      <motion.h2
        initial={{opacity:0, y:-20}}
          whileInView={{ opacity:1 , y:0}}
          transition={{ duration: 1 ,delay:0.3}}
        className="text-center text-4xl mb-20"
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-24">
        
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay:0.5 ,ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {leftCerts.map((cert, index) => (
            <div
              key={index}
              className="border border-neutral-700 p-6 rounded-lg transition-all duration-300 ease-out
                         hover:-translate-y-2 hover:border-red-500
                         hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]"
            >
              <h6 className="font-semibold mb-1">{cert.title}</h6>
              <p className="text-neutral-400 text-sm">
                {cert.company} – {cert.date}
              </p>
              <p className="mt-2 text-neutral-300 text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5,  delay:0.5 , ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {rightCerts.map((cert, index) => (
            <div
              key={index}
              className="border border-neutral-700 p-6 rounded-lg transition-all duration-300 ease-out
                         hover:-translate-y-2 hover:border-red-500
                         hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]"
            >
              <h6 className="font-semibold mb-1">{cert.title}</h6>
              <p className="text-neutral-400 text-sm">
                {cert.company} – {cert.date}
              </p>
              <p className="mt-2 text-neutral-300 text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Certificate;
