export function About() {
  return (
    <section className="container mx-auto my-4 max-w-5xl p-4">
      <div className="relative p-4 text-center">
        <h2 className=" relative text-blue-900 font-bold z-10">
          <span className="mr-2 font-headline text-3xl">Sobre</span>
          <span className="font-handwriting text-4xl">Mim</span>
        </h2>
        <p className="relative text-sm text-gray-600">
          Tenho mais de 10 projetos executados e gostaria que o próximo seja o seu.
        </p>

        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40"></div>
      </div>

      <div className="relative mx-auto mt-20 max-w-lg">
        <div className="relative w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48">

          <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
            <p className="font-handwriting text-lg font-bold">Olá,</p>
            <p>
              <span className="mr-1">Meu nome é</span>
              <span className="font-headline font-bold uppercase text-blue-900">Flávio Lima</span>
            </p>

            <table className="mt-4 w-full text-sm">
              <tbody>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Idade:
                  </td>
                  <td>25</td>
                </tr>

                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Celular:
                  </td>
                  <td>
                    <a href="tel:+5522992539922" className="underline hover:text-blue-800">+55 22 99253-9922</a>
                  </td>
                </tr>

                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Email:
                  </td>
                  <td>
                    <a href="mailto:flavio.lima981@gmail.com" className="underline hover:text-blue-800">flavio.lima981@gmail.com</a>
                  </td>
                </tr>

                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Endereço:
                  </td>
                  <td>
                    <a href="https://www.google.com/maps/place/Nova+Friburgo,+RJ/@-22.2809342,-42.5329603,12z/data=!3m1!4b1!4m6!3m5!1s0x978a936f151283:0xff2b16c0bfb117c4!8m2!3d-22.2887261!4d-42.5340796!16zL20vMDJscjN3?entry=ttu" target="_blank" className="underline hover:text-blue-800">Nova Friburgo - RJ</a>
                  </td>
                </tr>

                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Disponível:
                  </td>
                  <td>
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className=" relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  </td>
                </tr>

              </tbody>
            </table>

          </div>

          <div
            className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600  bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56"
            style={{ backgroundImage: `url('images/perfil.png')` }}
          ></div>
        </div>
      </div>
    </section>
  )
}
