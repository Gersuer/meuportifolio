import { Link } from 'react-router-dom'
interface ProjectProps {
    name: string
    message: string
    image: string
    description: string
    link: string
    tecnologies: string[]
}
export const ProjectCard = ({ name, image, message, description, link, tecnologies }: ProjectProps) => {
    return (
        <Link target='_blank' to={link}>
            <div className="flex flex-col md:flex-row md:max-w-2xl gap-5 items-center px-3 py-3 shadow-slate-800 shadow-md rounded-lg hover:scale-105 duration-200 cursor-pointer bg-slate-600 hover:bg-slate-500">
                <img className='w-[100px] md:w-[130px]' src={image} alt="" />
                <div className='flex flex-col items-center gap-4 text-white'>
                    <span className='text-xl font-semibold'>{name}</span>
                    <p>{description}</p>
                    <p>{message}</p>
                    <div className='flex gap-4'>
                        {tecnologies.map((tec, index) => (
                            <img key={index} className='w-[30px]' src={tec} alt="tecnologia" />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}
