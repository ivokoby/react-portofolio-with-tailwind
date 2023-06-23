import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">IK</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="./docs/Cv.pdf"
                  download
                >
                  DESCARGAR CV
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Ivan Kobylañsky
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Frontend developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Me fascina el mundo IT, soy una persona creativa, innovadora y ambiciosa. Siendo artista tengo ganas de crear, 
          es por eso que decidí enfocarme como Frontend Developer.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a class="git" href="https://www.linkedin.com/in/ivokoby/" rel="noreferrer" target="_blank">
  <AiFillLinkedin />
</a>

              
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="img"/>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-teal-500 text-center">Sobre mi</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Como desarrollador 
              <span className="text-teal-500"> front-end </span>
              creativo, cuento con un año de experiencia profesional en la creación de aplicaciones web, donde combino mi habilidad para el diseño con el uso de tecnologías como React.js, Next.js y JavaScript. Mi sólido dominio de HTML y CSS me permite plasmar mi visión creativa en cada proyecto. Además, destaco por mis habilidades de resolución de problemas, lo que me permite enfrentar desafíos y encontrar soluciones innovadoras. Mi pasión por el desarrollo web me impulsa a estar siempre en busca de nuevas tecnologías y oportunidades para mejorar y expandir mis habilidades en el ámbito del diseño web.
            </p>
          </div>
          <h3 className="text-3xl py-1 text-teal-500 text-center mt-4">Tecnologías</h3>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="img" />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600 ">
                Frontend
              </h3>
              
              <p className="text-gray-800 py-1">React.JS</p>
              <p className="text-gray-800 py-1">Next.JS</p>
              <p className="text-gray-800 py-1">Redux</p>
              <p className="text-gray-800 py-1">Tailwindcss / Bootstrap</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="img"/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
                Backend
              </h3>
              
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">Express</p>
              <p className="text-gray-800 py-1">Firebase / AWS</p>
              <p className="text-gray-800 py-1">PostgreSQL</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="img"/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">Tools</h3>
              
              <p className="text-gray-800 py-1">Github / Bitbucket</p>
              <p className="text-gray-800 py-1">Slack</p>
              <p className="text-gray-800 py-1">Trello</p>
              <p className="text-gray-800 py-1">Jira</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
          <h3 className="text-3xl py-1 text-teal-500 text-center">Proyectos</h3>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
             He trabajado como <span className="text-teal-500"> FullStack developer </span> en proyectos desafiantes que involucran tanto el desarrollo frontend como backend. Utilicé tecnologías como React.js, Next.js, Redux, MongoDB, Express y AWS, entre otras. Tuve la suerte de participar en equipos multidisciplinarios y utilicé herramientas de gestión de proyectos como Github, Bitbucket, Slack, Trello y Jira.
            </p>

          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
            <a class="textdeco" href="https://estudiocactus.com/es" rel="noreferrer" target="_blank">
            <Image
                className="rounded-lg object-cover opacity-100 hover:opacity-50 transition-opacity"
                width={"100%"}
                height={"70%"}
                layout="responsive"
                src={web1}
                alt="img"
              />
          </a>
              
          <div class="dark:text-white">
  <h2 class="text-center my-2 text-xl font-bold">Estudio Cactus – España, Valencia</h2>
  <ul>
    <li class="dark:text-white my-1"><em>- Colaboré en el desarrollo y mantenimiento de aplicaciones web utilizando React.js y Next.js.</em></li>
    <li class="dark:text-white my-1"><em>- Trabajé en estrecha colaboración con el equipo de desarrollo para implementar nuevas características y resolver problemas técnicos.</em></li>
    <li class="dark:text-white my-1"><em>- Participé en reuniones de planificación y revisiones de código para garantizar la calidad del software.</em></li>
  </ul>
</div>

            </div>
            <div className="basis-1/3 flex-1">
            <a class="textdeco" href="https://eccomercepf.vercel.app/" rel="noreferrer" target="_blank">
            <Image
               className="rounded-lg object-cover opacity-100 hover:opacity-50 transition-opacity"
                width={"100%"}
                height={"70%"}
                layout="responsive"
                src={web2}
                alt="img"
              />
          </a>
             
              <div class="dark:text-white my-1">
              <h2 class="text-center my-2 text-lg font-bold">Front-end Web Developer – Qatar e-commerce</h2>
<em>- Participé en un equipo de desarrollo ágil (Scrum) donde la idea del proyecto fue hacer un e-commerce
mostrando y vendiendo diferentes productos relacionados al Mundial de Qatar 2022</em>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
