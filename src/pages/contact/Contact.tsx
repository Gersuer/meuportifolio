import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation";

const Contact = () => {

  return (
    <div className="w-full flex flex-col gap-14 h-[80vh] items-center justify-center px-5 py-8">
      <div>
        <h1 className="text-white text-2xl">Contato</h1>
      </div>
      <div className="flex gap-3 justify-center">
        <Link target="_blank" to='https://www.instagram.com/gersueroliveira/' className="flex w-[100px] md:w-[120px] md:h-[120px] h-[100px] bg-slate-600 justify-center items-center text-white rounded-full shadow-slate-800 shadow-md md:hover:scale-110 md:duration-100">
          <FaSquareInstagram size={45} />
        </Link>
        <Link target="_blank" to='https://github.com/Gersuer' className="flex w-[100px] md:w-[120px] md:h-[120px] h-[100px] bg-slate-600 justify-center items-center rounded-full text-white shadow-slate-800 shadow-md md:hover:scale-110 md:duration-100">
          <FaGithub size={45} />
        </Link>
        <Link target="_blank" to='https://www.linkedin.com/in/gersuer-henrique-sousa-de-oliveira-469459232/' className="flex w-[100px] md:w-[120px] md:h-[120px] h-[100px] bg-slate-600 justify-center items-center rounded-full text-white shadow-slate-800 shadow-md md:hover:scale-110 md:duration-100">
          <FaLinkedin size={45} />
        </Link>
      </div>
      <Navigation navigation_one={''} navigation_two={'projects'} />
    </div>
  )
}

export default Contact