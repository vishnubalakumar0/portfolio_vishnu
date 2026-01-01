import { CONTACT } from "../constants"
import resume from "../assets/resume.pdf"
import { MapPin, Mail, FileText } from "lucide-react"



const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
       <h1 className="my-10 text-center font-semibold text-4xl">Get In Touch</h1>
        <div className="text-center tracking-tighter">
            <p className="my-4">
              
              <a href="https://www.google.com/maps/place/Coimbatore,+Tamil+Nadu" target="_blank" className=""> <MapPin size={18} />{CONTACT.address}</a></p>
                       <a
  href="mailto:vishnub9842@gmail.com"
  className="flex justify-center items-center gap-2  text-gray-200 hover:text-white transition"
  rel="noopener noreferrer"
>
  <Mail size={18} /> vishnub9842@gmail.com
</a>


            <p className="my-4"><a href={resume} target="_blank" className="text-sm font-semibold">View Resume</a></p>
        </div>
    </div>
  )
}

export default Contact
