import { HiDownload } from 'react-icons/hi'

export function Hero() {
  return (
    <section className="rounded-br-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-br-[180px]">
      <div className="container mx-auto max-w-4xl p-2 py-12 flex">
        <div>
          <h1 className="mb-6 text-center md:text-left">
            <span className="font-handwriting block text-3xl text-center md:text-left">Olá, me chamo</span>
            <span className="font-headline text-5xl font-semibold">Flávio </span>
            <span className="font-headline text-5xl font-light text-blue-400">Lima</span>
          </h1>

          <h2 className="font-semibold flex items-center justify-center gap-2 md:justify-start">
            <div className="h-1 w-12 rounded-full bg-blue-800"></div>
            Desenvolvedor React.js Front-end
          </h2>

          <p className="text-gray-400 my-6 text-center md:text-left" >
            Desenvolvedor React Junior apaixonado por transformar ideias em realidade através do poder do React. Especializado em desenvolvimento Front-end, tenho habilidades sólidas em HTML e CSS. Busco aperfeiçoar meu JavaScript e atingir proficiência em frameworks e bibliotecas como React. Procuro uma abordagem orientada a detalhes e foco na usabilidade, busco constantemente aprimorar minhas habilidades e aprender novas tecnologias. Sou apaixonado por desafios e estou sempre em busca de soluções criativas para problemas complexos. Pronto para contribuir e crescer em um ambiente colaborativo, onde posso fazer a diferença e impulsionar projetos emocionantes. Vamos criar experiências incríveis juntos!
          </p>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <a href="#" className="underline font-bold text-white">Fale Comigo</a>
            <span className="italic text-gray-500">ou</span>
            <a href="#" className="button text-gray-600 hover:text-gray-900 flex items-center gap-2">
              <HiDownload />
              Baixe meu CV
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
