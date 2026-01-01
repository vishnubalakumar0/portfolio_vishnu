import { CERTIFICATE } from "../constants"



const Certificate = () => {
  return (
   <div className="border-b border-neutral-900 py-16">
  <h2 className="text-center text-3xl font-bold mb-10">📜 Certifications</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:px-45 ">
  {/* Certifications */}
  {CERTIFICATE.map((cert, index) => (
    <div
      key={index}
      className="mb-8 flex flex-wrap lg:justify-center border border-neutral-700 p-6 rounded-lg hover:bg-neutral-900/40 transition"
    >
      <div className="w-full lg:w-1/4 text-left lg:text-right pr-4">
        <h6 className="font-semibold">{cert.title}</h6>
      </div>

      <div className="w-full max-w-xl lg:w-3/4">
        <p className="text-neutral-400">{cert.company} - {cert.date}</p>
        <p className="mt-2 text-neutral-300 text-sm">{cert.description}</p>
      </div>
    </div>
  ))}
  </div>
</div>

  )
}

export default Certificate
