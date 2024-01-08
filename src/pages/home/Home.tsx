import { useState } from 'react'
import profilePicture from '../../assets/profilePicture.jpeg'
import Navigation from '../../components/navigation/Navigation'
const Home = () => {
  const [language, setLanguage] = useState('portugues')
  const translations = {
    portugues: {
      welcome: 'Bem vindo ao meu Portifólio',
      apresentacao: 'Oi, meu nome é Gersuer Henrique',
      biografia: "Sou desenvolvedor frontend e também estudante de TSI - Tecnologia em Sistemas para Internet no Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
      skills: 'Minhas Habilidades'
    },
    ingles: {
      welcome: 'Welcome to my Portifolio',
      apresentacao: 'Hi, my name is Gersuer Henrique.',
      biografia: "I am  aspiring frontend developer, also a student of TSI - Internet Systems Technology at the Federal Institute of Education, Science and Technology of Rio Grande do Norte.",
      skills: 'My Skills'
    },
  }
  function changeLanguage(language: string) {
    if (language === 'portugues') {
      setLanguage('ingles')
      return
    }
    else {
      setLanguage('portugues')
      return
    }
  }
  return (
    <main className="w-full h-[100vh] flex items-center">
      <div className=' w-full h-full flex flex-col px-4 justify-center items-center gap-8'>
        <div className='w-full text-center text-2xl text-zinc-200'>
          {language === 'portugues' ? (
            <h1 className='font-nunito font-bold'>{translations.portugues.welcome}</h1>

          ) : (
            <h1 className='font-nunito font-bold'>{translations.ingles.welcome}</h1>

          )}
        </div>
        <div className='w-52'>
          <img
            className='rounded-full'
            src={profilePicture}
            alt="profile picture" />
        </div>
        <div className='w-full flex items-center flex-col gap-5'>
          <div className='w-full items-center flex sm:text-center text-lg flex-col gap-2'>
            <div className='text-white flex gap-2 font-semibold mb-2'>
              <button
                onClick={() => changeLanguage('ingles')}
                className='underline underline-offset-4 hover:text-slate-500'>Mudar para Português</button> / <button
                  onClick={() => changeLanguage('portugues')}
                  className='underline underline-offset-4 hover:text-slate-500'>Change to English</button>
            </div>
            {language === 'portugues' ? (
              <>
                <span className='font-nunito text-zinc-200'>{translations.portugues.apresentacao}</span>
                <span className='font-nunito text-center text-zinc-200'>{translations.portugues.biografia}
                </span>
              </>
            ) : (
              <>
                <span className='font-nunito text-zinc-200'>{translations.ingles.apresentacao}</span>
                <span className='font-nunito text-center text-zinc-200'>{translations.ingles.biografia}
                </span>
              </>
            )}
          </div>
          <div className='w-full flex flex-col justify-center items-center gap-4'>
            <div>
              {language === 'portugues' ? (
                <span className='font-nunito text-xl text-zinc-200 font-semibold'>{translations.portugues.skills}</span>
              ) : (
                <span className='font-nunito text-xl text-zinc-200 font-semibold'>{translations.ingles.skills}</span>
              )}
            </div>
            <div className='flex gap-4'>
              <img className='w-10' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html icon" />
              <img className='w-10' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css icon" />
              <img className='w-10' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="javascript icon" />
              <img className='w-10' src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg" alt="react icon" />
              <img className='w-10' src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg" alt="typescript icon" />
              <img className='w-10' src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/tailwindcss/tailwindcss-plain.svg" />
            </div>
          </div>
          <Navigation navigation_one={'projects'} navigation_two={'contact'} />
        </div>
      </div>
    </main>
  )
}

export default Home