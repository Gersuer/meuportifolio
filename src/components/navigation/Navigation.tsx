import { Link } from "react-router-dom"
interface NavigationProps {
    navigation_one: string
    navigation_two: string
}
const Navigation = ({ navigation_one, navigation_two }: NavigationProps) => {
    let navigate = '';
    if (navigation_one === '') {
        navigate = 'home'
    } else {
        navigate = navigation_one
    }
    return (
        <div className='w-full flex items-center justify-around md:justify-center gap-4 text-zinc-200 font-nunito text-xl sm:text-xl font-semibold mt-4'>
            <Link className=' md: transition-all md:ease-in md:hover:scale-110 border-b ' to={`/${navigation_one}`}>
                {navigate.toUpperCase()}
            </Link>
            <span className="h-8 border-[2px]"></span>
            <Link className='md:hover:scale-110 md:duration-150 border-b' to={`/${navigation_two}`} >
                {navigation_two.toUpperCase()}
            </Link>
        </div>
    )
}

export default Navigation
