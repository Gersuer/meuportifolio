import Navigation from "../../components/navigation/Navigation"
import { ProjectCard } from "../../components/projectCard/ProjectCard"
import disney from '../../assets/logoDisneyPortifolio.png';
import uber from '../../assets/LogoUberPortifolio.png';
import frontend from '../../assets/frontedmentorlogoportifolio.png'
import linketree from '../../assets/linketree.png'
import weather from '../../assets/weather.png'
import qrcode from '../../assets/qrcodeportifolio_resized.png'
import nftcard from '../../assets/nftportifolio_resized.png'
import responsivetest from '../../assets/responsive_resized.png'
const ProjectsPage = () => {
  const projects = [
    {
      name: 'Projeto clone Disney+',
      img: disney,
      default_message: 'Para visitar basta clicar no banner',
      description: 'Projeto que reproduz o design responsivo do serviço de streaming do Disney +.',
      link: 'https://gersuerdisneylayout.netlify.app/',
      tecnologies: ['https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg', 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg', 'https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/tailwindcss/tailwindcss-plain.svg'
      ]
    },
    {
      name: 'Projeto Página da Uber',
      img: uber,
      default_message: 'Para visitar basta clicar no banner',
      description: 'Projeto que visava criar uma página responsiva semelhante à webpage da empresa Uber.',
      link: 'https://henriquestudyproject.netlify.app/',
      tecnologies: [
        'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/tailwindcss/tailwindcss-plain.svg'
      ]
    },
    {
      name: 'Qr Code',
      img: qrcode,
      default_message: 'Para visitar basta clicar no banner',
      description: 'Meu primeiro projeto, desafio do frontend mentor, que visa criar um card de QR code.',
      link: 'https://gersuerqrcodeproject.netlify.app/',
      tecnologies: ['https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg']
    },
    {
      name: 'NFT card',
      img: nftcard,
      default_message: 'Para visitar basta clicar no banner',
      description: 'Outro projeto de quando comecei, que semelhante ao anterior visava criar um card, mas com um pouco de mais detalhes.',
      link: 'https://gersuerqrcodeproject.netlify.app/',
      tecnologies: ['https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg']
    },
    {
      name: 'Projeto de responsividade',
      img: responsivetest,
      default_message: 'Para visitar basta clicar no banner',
      description: 'Minha primeira tentativa de fazer uma página responsiva, mas é interessante ver a minha evolução em projetos futuros.',
      link: 'https://gersuerresponsivetest.netlify.app/',
      tecnologies: ['https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg']
    },
    {
      name: 'Projeto Linketree',
      img: linketree,
      default_message: 'Para visitar basta clicar no banner',
      description: 'Projeto do curso Sujeito programador, que visava criar uma página do tipo Linketree.',
      link: 'https://gersuerlinks.netlify.app/',
      tecnologies: [
        'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg',
      ]
    },
    {
      name: 'Weather App',
      img: weather,
      default_message: 'Para visitar basta clicar no banner',
      description: 'Página desenvolvida para buscar informações sobre o clima em diversos lugares do mundo. Projeto criado para aprender mais sobre requisições http.',
      link: 'https://weatherappgersuer.netlify.app/',
      tecnologies: [
        'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg',
      ]
    },

    {
      name: 'Projeto Landing Page Fylo',
      img: frontend,
      default_message: 'Para visitar basta clicar no banner',
      description: 'Projeto desafio do site Front-end Mentor, que visa criar uma landing page responsiva.',
      link: 'https://gersuerlandingpage.netlify.app/',
      tecnologies: [
        'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/tailwindcss/tailwindcss-plain.svg'
      ]
    },

  ]
  return (
    <section className="w-full h-full flex gap-8 flex-col px-8 py-4">
      <div className="flex flex-col gap-3 items-center w-full h-full">
        <h1 className="text-2xl font-nunito font-semibold text-zinc-300">PROJETOS</h1>
        <span className="text-white">Os projetos aqui contidos são alguns desde quando comecei meus primeiros passos no desenvolvimento web até os dias atuais.</span>
        <span className="text-white">Observação: Todos os projetos foram criados com o intuito de aprimorar habilidades de desenvolvimento, sendo assim nenhuma imagem teve fim de ganho monetário que possa ferir direitos autorais.</span>
        <Navigation navigation_one={''} navigation_two={'contact'} />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-items-center py-8">
        {projects.map((projeto, index) => (
          <ProjectCard key={index} name={projeto.name} message={projeto.default_message} image={projeto.img} description={projeto.description} link={projeto.link} tecnologies={projeto.tecnologies} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
