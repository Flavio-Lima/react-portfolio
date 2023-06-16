import { HiArrowTopRightOnSquare } from "react-icons/hi2"

export function Projects() {
  const projects =
  [
    {
      title: "API GitHub",
      description: 'Um projeto que consome a API do GitHub. O objetivo é mostrar como é possível interagir com a API do GitHub e exibir informações de usuários e repositórios. Pode pesquisar o meu caso queira "Flavio-Lima"',
      image: "images/1.jpeg",
      link: "https://flavio-lima.github.io/api-github-dev/",
      colSpan: "col-span-1",
    },
    {
      title: "Ramos Marcenaria",
      description: "site para exposição dos trabalhos de uma marcenaria.",
      image: "images/2.png",
      link: "https://flavio-lima.github.io/ramos_marcenaria/index.html",
      colSpan: "col-span-1",
    },
    {
      title: "Venda Automotiva",
      description: "Um site para exposição e venda de carros. Com o objetivo de fornecer uma plataforma online onde os usuários possam visualizar e obter informações sobre os veículos disponíveis para venda. Veja os detalhes da Caravan.",
      image: "images/3.png",
      link: "https://flavio-lima.github.io/VendaAutomovel/index.html",
      colSpan: "col-span-1",
    },
    {
      title: "Todo",
      description: "Este é um projeto simples de lista de tarefas (TODO). Ele permite que os usuários gerenciem suas tarefas diárias, marcando como concluídas e removendo tarefas da lista.",
      image: "images/4.png",
      link: "https://flavio-lima.github.io/TODO/",
      colSpan: "col-span-1",
    },
    {
      title: "Consultório Odontológico",
      description: "Esta é uma Landing page fictícia, responsiva desenvolvida para um consultório odontológico.",
      image: "images/5.png",
      link: "https://flavio-lima.github.io/Dentista/",
      colSpan: "col-span-1",
    },
    {
      title: "Gerador de senhas",
      description: "Este é um projeto simples que consiste em um gerador de senhas aleatórias e fortes. O objetivo é fornecer uma ferramenta fácil de usar para gerar senhas seguras, que possam ser utilizadas em diversos contextos.",
      image: "images/6.png",
      link: "https://flavio-lima.github.io/password_generator/",
      colSpan: "col-span-1",
    },
  ]
  return (
    <section className="rounded-tl-[80px] bg-gradient-to-t from-black to-gray-900 text-white md:rounded-tl-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">

        <div className="relative p-4 text-center">
          <h2 className="relative z-50 mb-2 text-white">
            <span className="mr-2 font-headline text-4xl">Projetos &</span>
            <span className="font-handwriting text-4xl">Portfólio</span>
          </h2>
          <p className="realtive text-sm text-gray-400">
            Alguns dos projetos pessoais e que já realizei ao longo da minha trajetória como programador front-end.
          </p>
          <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {
            projects.map((project, index) => (
              <div
                key={`project-${index}`}
                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')` }}
              >

                <div className="px-1 text-center absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className=" mb-4 text-sm">{project.description}</p>
                  <a href={project.link} target="_blank">
                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                  </a>
                </div>

              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}
