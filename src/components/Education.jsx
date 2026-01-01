import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Education</h1>
      <div>
        {EDUCATION.map(( Education , index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{Education.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {Education.course} -{" "}
                <span className="text-sm text-purple-100">
                  {Education.college}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{Education.description}</p>
              {Education.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4  rounded bg-neutral-900 
                    px-2 py-1 text-sm text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
