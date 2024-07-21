/* import logo from './logo.svg'; */

/* import './App.css'; */
import React, { useRef } from 'react';
import { useScroll } from 'react-scroll';


import Sidebar from "../src/Components/Sidebar.jsx";

/* import Card from "../src/Components/Card.jsx"; */
import TableInfo from "./Components/TableInfo.jsx";
import CardProject from "./Components/CardProject.jsx";

import { FaGithub, FaLinkedin, FaRegFolderOpen, FaSuitcase } from "react-icons/fa6";
import { FaSmileWink, FaClipboardList } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

// en sidebar, (quitar luego)
/* FaRegFolderOpen
FaSuitcase
FaSmileWink
IoMdPerson */

import Badge from "../src/Components/Badge.jsx";


import imgSebastianBonilla from "./Assets/imgSebastianBonillaa.jpg";
import imgReportesPlus from "./Assets/imgReportesPlus.png";

/* listado tecnologias Proyectos */
let lstTechP1 = ["HTML", "CSS", "JavaScript", "React"];

/* listado tecnologias Experiencia */
let lstTechE1 = ["C", "C++", "C#", "HTML", "Java", "JavaScript", "Python", "SQL"];
let lstTechE2 = ["HTML", "CSS", "JavaScript", "React", "Figma", "Git"];

/* let lstT = ["Hola", "soy", "una", "etiqueta"]; */



function App() {



  return (

    <div class="flex justify-between static"> {/* STRUCT */}

      <header class="hidden lg:flex lg:w-1/3 bg-color_primary lg:sticky lg:top-0 right-0  lg:max-h-screen w-max"> {/* SIDEAR */}  {/* bg-color_primary  lg:flex  lg:max-h-screen */}
        <Sidebar> </Sidebar>
      </header>


      <main class="lg:w-2/3"> {/* BODY */} {/* bg-lime-200 */}

        {/* <Badge Icon={FaSmileWink} Text={"HOLA"}> </Badge> */}

        <div id="sobremi" class="lg:max-w-4xl px-6 sm:px-20 pt-10">

          {/* section SOBRE MI */}
          <div class="mb-60">
            {/* IMAGE CONTAINER */}
            <div class="flex justify-center pt-5">
              <div class="w-52 border-solid border-color_primary border-zinc-700 border-8 rounded-full overflow-hidden ">
                <img src={imgSebastianBonilla} />
              </div>
            </div>

            {/* ICONS CONTAINER */}
            <div class="flex justify-center">
              <div class="pt-1 pb-6 gap-x-5 grid grid-cols-2 grid-flow-row">

                {/* ICON */}
                <div class="p-5">
                  <div class="w-10 border-opacity h-10 rounded-full inline-flex items-center justify-center relative z-10 order-solid border-2 border-zinc-700">
                    <a class=" " href='https://www.linkedin.com/in/sebastianbonilla13'>
                      <FaLinkedin color="#484848" class="w-10 h-10 p-2" />
                    </a>
                  </div>
                </div>

                <div class="p-5">
                  <div class="w-10 border-opacity h-10 rounded-full inline-flex items-center justify-center relative z-10 border-solid border-2 border-zinc-700">
                    <a class=" " href='https://github.com/SebastianBonilla13'>
                      <FaGithub color="#484848" class="w-10 h-10 p-2 zinc-700" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div class="grid gap-y-5 pt-3">

              {/* NAME */}
              <div class="text-left">
                <h1 class="text-5xl font-bold text-zinc-700 text-color_primary ">
                  Sebastián Bonilla
                </h1>
              </div>

              <div>
                <h2 class="text-3xl font-bold text-zinc-700 text-color_primary" >
                  Software Developer
                </h2>
              </div>

              <div>
                <p class="text-base text-zinc-700 text-color_primary max-w-xl">
                  Apasionado del diseño, combino habilidades de programación para crear interfaces limpias,
                  intuitivas y accesibles. Supero las expectativas de los usuarios, entregando experiencias
                  digitales atractivas y fáciles de usar.
                </p>
              </div>

            </div>

          </div>

          {/* section PROYECTOS */}
          <div id="proyectos" class="pt-10 mb-28">

            <h2 class="text-xl font-bold text-zinc-700 text-color_primary" >
              PROYECTOS
            </h2>

            {/* Proyecto 1 */}
            <div class="flex justify-center pt-8 sm:mx-8">
              <CardProject
                image={imgReportesPlus}
                /* Reportes Plus */
                tittle={
                  <>
                    <a class="text-zinc-700">Reportes Plus</a>
                  </>
                }
                description={
                  <>
                    <div class="text-zinc-700">
                      Información Presupuestal Universidad del Cauca. Proporcionar a los usuarios
                      finales del área financiera e interesados de la  universidad, una herramienta
                      que les permita consultar y descargar  información presupuestal en tiempo real.
                    </div>
                  </>
                }
                lstTech={lstTechP1}>
              </CardProject>
            </div>

            {/* Proyecto 2 */}
            <div class="flex justify-center pt-8 sm:mx-8">
              <CardProject
                image={imgReportesPlus}
                /* Reportes Plus */
                tittle={
                  <>
                    <a class="text-zinc-700">Reportes Plus</a>
                  </>
                }
                description={
                  <>
                    <div class="text-zinc-700">
                      Información Presupuestal Universidad del Cauca. Proporcionar a los usuarios
                      finales del área financiera e interesados de la  universidad, una herramienta
                      que les permita consultar y descargar  información presupuestal en tiempo real.
                    </div>
                  </>
                }
                lstTech={lstTechP1}>
              </CardProject>
            </div>

          </div>

          {/* section EXPERIENCIA */}
          <div id="experiencia" class="pt-10 mb-28">

            <h2 class="text-xl font-bold text-zinc-700 text-color_primary" >
              EXPERIENCIA
            </h2>

            {/* Experiencia 1 */}
            <div class="flex justify-center pt-8 sm:mx-8">
              <TableInfo
                tittle={
                  <>
                    <a class="text-zinc-700">Ingeniero de Sistemas - Universidad del Cauca</a>
                  </>
                }
                date={
                  <>
                    <a class="text-zinc-700">2018 - 2024</a>
                  </>
                }
                description={
                  <>
                    <div class="text-zinc-700">
                      Estudiante de último semestre de <a class="underline decoration-zinc-700">Ingeniería de Sistemas</a>
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
                    <a class="text-zinc-700">Fronted Developer - ONE (Oracle Next Education)</a>
                  </>
                }
                date={
                  <>
                    <a class="text-zinc-700">2024 - PRESENTE</a>
                  </>
                }
                description={
                  <>
                    <div class="text-zinc-700">
                      <a class="underline decoration-zinc-700">Front-End:</a> Construcción de páginas web responsivas con HTML, CSS y JavaScript.<br />
                      <a class="underline decoration-zinc-700">React con JavaScript:</a> Creación de interfaces de usuarios.<br />
                      <a class="underline decoration-zinc-700">IA en el Front-End:</a> Optimización de desarrollo y generación de experiencias innovadoras.
                    </div>
                  </>
                }
                lstTech={lstTechE2}>
              </TableInfo>
            </div>

          </div>

          {/* section ¿? */}
          <div id="¿?" class="pt-0 mb-24 g-red-400">
            <div class=""> {/* text-center */}
              <h2 class="text-2xl font-bold text-zinc-700 text-color_primary py-52" >
                ¿Te interesa impulsar tu proyecto al siguiente nivel? ¡Hagámoslo realidad!
              </h2>
            </div>
          </div>

        </div>
      </main>

    </div>



  );
}

export default App;


