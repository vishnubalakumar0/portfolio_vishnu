import { CERTIFICATE } from "../constants";

const Certificate = () => {
  return (
    <div className="border-b border-neutral-900 py-16">
      <h2 className="  text-center text-4xl  mb-20">Certifications</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:px-45 ">
        {/* Certifications */}
        {CERTIFICATE.map((cert, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center border border-neutral-700 p-6 rounded-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_30px_
      (239,68,68,0.15)]  "
          >
            <div className="w-full lg:w-1/4 text-left lg:text-right pr-4">
              <h6 className="font-semibold">{cert.title}</h6>
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <p className="text-neutral-400">
                {cert.company} - {cert.date}
              </p>
              <p className="mt-2 text-neutral-300 text-sm">
                {cert.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
