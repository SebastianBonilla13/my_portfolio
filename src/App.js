import React, { useRef } from 'react';

import Sidebar from "../src/Components/Sidebar.jsx";
import TableInfo from "./Components/TableInfo.jsx";
import CardProject from "./Components/CardProject.jsx";
import ToolTip1 from "./Components/ToolTip1.jsx";

import { FaGithub, FaLinkedin} from "react-icons/fa6";

import imgSebastianBonilla from "./Assets/imgSebastianBonillaa.jpg";
import imgReportesPlus from "./Assets/imgReportesPlus.png";
import imgEncriptadorTexto from "./Assets/imgEncriptadorTexto.png";

/* listado tecnologias Proyectos */
let lstTechP1 = ["Bootstrap", "JavaScript", "React", "Figma"];
let lstTechP2 = ["Tailwind CSS", "JavaScript", "React"];

/* listado tecnologias Experiencia */
let lstTechE1 = ["C", "C++", "C#", "HTML", "Java", "JavaScript", "Python", "SQL"];
let lstTechE2 = ["Java", "Spring Boot", "PostgreSQL", "Postman", "Git"];


function App() {

  return (

    <div class="flex justify-between static bg-gradient-to-r from-slate-800  to-slate-900 "> {/* STRUCT */}

      <header class="hidden lg:flex justify-center 2xl:w-3/5 2xl:justify-end lg:w-1/3 bg-color_primary lg:sticky lg:top-0 right-0  lg:max-h-screen w-max"> {/* SIDEAR */}  {/* bg-color_primary  lg:flex  lg:max-h-screen */}
        <div class="flex justify-center">
          <Sidebar> </Sidebar>
        </div>
      </header>

      <main class="lg:w-2/3 2xl:w-3/4 "> {/* BODY */} {/* bg-lime-200 */}

        <div id="sobremi" class="lg:max-w-4xl px-6 sm:px-20 pt-10 ">

          {/* section SOBRE MI */}
          <div class="mb-60 ">
            {/* IMAGE CONTAINER */}

            <div class="flex justify-center pb-60">

              {/* LUZ ESTADO */}
              <div class="absolute z-40 mt-36 ml-44 pl-3">
                <ToolTip1 position="bottom" tooltipsText="Disponible ;)">
                  <span class="relative flex h-4 w-4 ">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 ring-2 ring-green-400 "></span>
                    <span class="relative inline-flex rounded-full h-4 w-4 bg-green-400 ring-2 ring-slate-300 "></span>
                  </span>
                </ToolTip1>
              </div>

              {/* IMAGE */}
              <div class="absolute z-20 ">
                <div class="flex justify-center">
                  <div class="w-52 rounded-full overflow-hidden ring-2 ring-slate-300 shadow-xl shadow-teal-300/35 over:shadow-slate-1/100 ">
                    <img src={imgSebastianBonilla} />
                  </div>
                </div>
              </div>

            </div>

            {/* ICONS CONTAINER */}
            <div class="flex justify-center">
              <div class="pt-1 pb-6 gap-x-5 grid grid-cols-2 grid-flow-row">

                <div class="p-5">
                  
                  {/* ICON LinkedIn */}
                  <ToolTip1 position="bottom" tooltipsText="LinkedIn">
                    <div class="p-5 bg-transparent  w-10 h-10 rounded-full inline-flex items-center justify-center  border-2 border-slate-200 shadow-lg shadow-slate-300/15 hover:shadow-teal-300/30">
                      <a class=" p-1" href='https://www.linkedin.com/in/sebastianbonilla13'>
                        <FaLinkedin color="#e2e8f0" class="w-10 h-10 p-2" />
                      </a>
                    </div>
                  </ToolTip1>

                </div>

                {/* ICON GitHub */}
                <div class="p-5">

                  <ToolTip1 position="bottom" tooltipsText="GitHub">
                    <div class="p-5 bg-transparent  w-10 h-10 rounded-full inline-flex items-center justify-center  border-2 border-slate-200 shadow-lg shadow-slate-300/15 hover:shadow-teal-300/30">
                      <a class=" p-1" href='https://github.com/SebastianBonilla13'>
                        <FaGithub color="#e2e8f0" class="w-10 h-10 p-2" />
                      </a>
                    </div>
                  </ToolTip1>

                </div>
              </div>
            </div>

            {/* TEXTO */}
            <div class="grid gap-y-5 pt-3">

              {/* NAME */}
              <div class="text-left">
                <h1 class="sm:text-5xl text-4xl font-extrabold text-slate-200 ">
                  Sebastián Bonilla
                </h1>
              </div>

              <div>
                <span
                  class="sm:text-4xl text-3xl absolute mr-6 font-extrabold text-transparent bg-clip-text blur-xl bg-gradient-to-r from-teal-300 via-sky-200 to-cyan-400">
                  Back-End Developer
                </span>
                <span
                  class="sm:text-4xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-200 to-cyan-400">
                  Back-End Developer
                </span>
              </div>

              {/* <div>
                <p class="text-base font-medium text-slate-300 max-w-2xl">
                  Apasionado del diseño, combino habilidades de programación para crear interfaces limpias,
                  intuitivas y accesibles. Supero las expectativas de los usuarios, entregando experiencias
                  digitales atractivas y fáciles de usar.
                </p>
              </div>*/}

              <div>
                <p class="text-base font-medium text-slate-300 max-w-2xl">
                  Apasionado por la construcción de la lógica detrás de las aplicaciones web.
                </p>
                <p class="text-base font-medium text-slate-300 max-w-2xl">
                  Creo soluciones completas, eficientes y robustas. 
                  Con conocimientos sólidos en Front-End, para ofrecer una visión integral del desarrollo.
                </p>
              </div>


            </div>

          </div>

          {/* section PROYECTOS */}
          <div id="proyectos" class="pt-10 mb-64">

          <span class="absolute mr-5 font-extrabold border blur-xl bg-gradient-to-r from-teal-500 via-sky-600 to-cyan-800 bg-clip-text text-xl text-transparent ">
            PROYECTOS
            </span>
            <h2 class="text-xl font-extrabold text-slate-200 text-color_primary" >
              PROYECTOS
            </h2>

            {/* Proyecto 1 */}
            <a class="flex justify-center pt-8 sm:mx-8" target="_blank" /* href="" */ >
              <CardProject
                image={imgReportesPlus}
                /* Reportes Plus */
                tittle={
                  <>
                    <span
                      class="ext-base ont-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-200 to-cyan-400">
                      Reportes Plus
                    </span>
                  </>
                  
                }
                description={
                  <>
                    <div class="text-slate-300">
                      <p>
                        Información Presupuestal Universidad del Cauca. Proporcionar a los usuarios
                        finales del área financiera e interesados de la  universidad, una herramienta
                        que les permita consultar y descargar  información presupuestal en tiempo real.
                      </p>
                      <br>
                      </br>
                      <p>
                        Creación de componentes reutilizables, considerando la usabilidad, el diseño atractivo y 
                        responsive. Regimiento de atributos de calidad establecidos.
                      </p>
                    </div>
                  </>
                }
                lstTech={lstTechP1}>
              </CardProject>
            </a>
            
            {/* Proyecto 2 */}
            <a class="flex justify-center pt-8 sm:mx-8" target="_blank" href="https://sebastianbonilla13.github.io/encriptador-de-texto/">
              <CardProject
                image={imgEncriptadorTexto}

                tittle={
                  <>
                    <span
                      class="ext-base ont-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-200 to-cyan-400">
                      Encriptador de Texto
                    </span>
                  </>
                  
                }
                description={
                  <>
                    <div class="text-slate-300">
                      Desarrollo de un encriptador de texto básico, que permite a los usuarios cifrar y 
                      descifrar texto de manera sencilla. Obteniendo un resultado funcional y responsive.
                    </div>
                  </>
                }
                lstTech={lstTechP2}>
              </CardProject>
            </a>

          </div>

          {/* section EXPERIENCIA */}
          <div id="experiencia" class="pt-10 mb-28 ">
            
            <span class="absolute mr-5 font-extrabold border blur-xl bg-gradient-to-r from-teal-500 via-sky-600 to-cyan-800 bg-clip-text text-xl text-transparent ">
              EXPERIENCIA
            </span>
            <h2 class="text-xl font-extrabold text-slate-200 text-color_primary" >
              EXPERIENCIA
            </h2>

            {/* Experiencia 1 */}
            <div class="flex justify-center pt-8 sm:mx-8">
              <TableInfo
                tittle={
                  <>
                    <span
                      class="ext-base ont-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-200 to-cyan-400">
                      Ingeniero de Sistemas - Universidad del Cauca
                    </span>
                  </>

                }
                date={
                  <>
                    <a class="text-slate-400">2018 - 2024</a>
                  </>
                }
                description={
                  <>
                    <div class="text-slate-300">
                      Estudiante de último semestre de <a class="underline decoration-slate-300 ">Ingeniería de Sistemas </a>
                      en la Universidad del Cauca, donde he adquirido conocimientos sólidos en áreas como programación,
                      análisis de sistemas y gestión de proyectos. Durante mi trayectoria académica he participado en diversos
                      proyectos que me han permitido explorar y desarrollar habilidades en diferentes lenguajes de programación
                      y tecnologías emergentes, aplicando mis conocimientos en un entorno práctico y colaborativo. En los que
                      también he cultivado habilidades interpersonales como la comunicación efectiva, la escucha activa y la
                      adaptabilidad, que considero fundamentales para el éxito en este entorno.
                    </div>
                  </>
                }
                lstTech={lstTechE1}>
              </TableInfo>
            </div>

            {/* Experiencia 2 */}
            <div class="flex justify-center pt-8 sm:mx-8">
              <TableInfo
                tittle={
                  <>
                    <span
                      class="ext-base ont-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-200 to-cyan-400">
                      Backend Developer - ONE (Oracle Next Education)
                    </span>
                  </>
                }
                date={
                  <>
                    <a class="text-slate-400">2024 - 2025</a>
                  </>
                }
                description={
                  <>
                    <div class="text-slate-300">
                      <a class="underline decoration-teal-300"> <strong>Java:</strong></a> Dominio de herencia, interfaces y manejo de excepciones<br />
                      <a class="underline decoration-teal-300"> <strong>Spring Boot Framework:</strong></a> APIs REST, desarrollo Web e integración con bases de datos<br />
                      <a class="underline decoration-teal-300"> <strong>IA en el Back-End:</strong></a> Productividad y optimización de desarrollo con ChatGPT.
                    </div>
                  </>
                }
                lstTech={lstTechE2}>
              </TableInfo>
            </div>

          </div>

          {/* section ¿? */}
          <div id="¿?" class="pt-56 pb-72 ">
            <div class="py-3"> {/* text-center */}

              <h1
                class="sm:text-4xl text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-300 to-cyan-600">
                ¿Te interesa impulsar tu proyecto al siguiente nivel?
              </h1>
              <br></br>

              <span
                class="sm:text-4xl text-2xl absolute mr-6 font-extrabold text-transparent bg-clip-text blur-xl bg-gradient-to-r from-teal-300 via-sky-200 to-cyan-400">
                ¡Hagámoslo realidad!
              </span>
              <span
                class="sm:text-4xl text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-200 to-cyan-400">
                ¡Hagámoslo realidad!
              </span>

            </div>
          </div>

          {/* section info */}
          <div id="¿?" class="mt-16 mb-16 g-red-400 g-red-300 flex justify-center sm:px-32 ">
            <div class="py-3">
              <h1
                class="m:text-base text-base text-slate-400 text-center">
                Hola. Diseñado en Figma y codificado en Visual Studio Code. Creado con React y estilado con Tailwind CSS.
              </h1>
            </div>
          </div>

        </div>
      </main>

    </div>

  );
}

export default App;


