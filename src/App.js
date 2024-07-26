/* import logo from './logo.svg'; */

/* import './App.css'; */
import React, { useRef } from 'react';
import { useScroll } from 'react-scroll';

import ToolTip1 from "./Components/ToolTip1.jsx";


import Sidebar from "../src/Components/Sidebar.jsx";

/* import Card from "../src/Components/Card.jsx"; */
import TableInfo from "./Components/TableInfo.jsx";
import CardProject from "./Components/CardProject.jsx";

import { FaGithub, FaLinkedin, FaRegFolderOpen, FaSuitcase } from "react-icons/fa6";
import { FaSmileWink, FaClipboardList } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

import { FaSearchengin } from 'react-icons/fa'

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

    <div class="flex justify-between static bg-gradient-to-r from-slate-800  to-slate-900 "> {/* STRUCT */}


      <header class="hidden lg:flex justify-center 2xl:w-3/5 2xl:justify-end lg:w-1/3 bg-color_primary lg:sticky lg:top-0 right-0  lg:max-h-screen w-max"> {/* SIDEAR */}  {/* bg-color_primary  lg:flex  lg:max-h-screen */}
        <div class="flex justify-center">
          <Sidebar> </Sidebar>
        </div>




      </header>


      <main class="lg:w-2/3 2xl:w-3/4 "> {/* BODY */} {/* bg-lime-200 */}

        {/* <Badge Icon={FaSmileWink} Text={"HOLA"}> </Badge> */}
        {/* <h1 class="[text-shadow:_0_1px_0_rgb(0__2_/_40%)]">Hello</h1> */}

        <div id="sobremi" class="lg:max-w-4xl px-6 sm:px-20 pt-10">

          {/* section SOBRE MI */}
          <div class="mb-60">
            {/* IMAGE CONTAINER */}
            {/* ring-1 ring-white ring-opacity-20 shadow-lg shadow-indigo-100/10 hover:shadow-indigo-100/25 */}

            <div class="flex justify-center bg-red-400">

              {/* LUZ ESTADO */}

              <div class="absolute z-40 mt-36 ml-44 pl-3">
                <ToolTip1 position="bottom" tooltipsText="Disponible ;)">
                  <span class="relative flex h-4 w-4 ">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 ring-2 ring-green-400 "></span>
                    <span class="relative inline-flex rounded-full h-4 w-4 bg-green-400 ring-2 ring-slate-300 "></span>
                  </span>
                </ToolTip1>
              </div>



              <div class="absolute z-20">
                <div class="flex justify-center">
                  <div class="w-52 rounded-full overflow-hidden ring-2 ring-slate-300 shadow-xl shadow-teal-300/35 over:shadow-slate-1/100 ">
                    <img src={imgSebastianBonilla} />
                  </div>
                </div>
              </div>

            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


            {/* <span class="relative flex h-3 w-3 bg-red-400">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
            </span>

            <div class="flex justify-center pt-5 ">
              <div class="w-52 order-solid order-color_primary order-slate-200 order-8 rounded-full overflow-hidden  ring-8 ring-slate-300 ing-opacity-20 shadow-xl shadow-slate-100/30 over:shadow-slate-1/100">
                <img src={imgSebastianBonilla} />
              </div>
            </div> */}

            {/* ICONS CONTAINER */}
            <div class="flex justify-center">
              <div class="pt-1 pb-6 gap-x-5 grid grid-cols-2 grid-flow-row">

                <div class="p-5">

                  {/* <div class="p-5 bg-transparent  w-10 h-10 rounded-full inline-flex items-center justify-center  border-2 border-slate-200 shadow-lg shadow-slate-300/15 hover:shadow-teal-300/30">
                    <a class=" p-1" href='https://www.linkedin.com/in/sebastianbonilla13'>
                      <FaLinkedin color="#e2e8f0" class="w-10 h-10 p-2" />
                    </a>
                  </div> */}

                  <ToolTip1 position="bottom" tooltipsText="LinkedIn">
                    <div class="p-5 bg-transparent  w-10 h-10 rounded-full inline-flex items-center justify-center  border-2 border-slate-200 shadow-lg shadow-slate-300/15 hover:shadow-teal-300/30">
                      <a class=" p-1" href='https://www.linkedin.com/in/sebastianbonilla13'>
                        <FaLinkedin color="#e2e8f0" class="w-10 h-10 p-2" />
                      </a>
                    </div>
                  </ToolTip1>

                </div>


                {/* ICON */}
                <div class="p-5">

                  {/* <div class="p-5 bg-transparent  w-10 h-10 rounded-full inline-flex items-center justify-center  border-2 border-slate-200 shadow-lg shadow-slate-300/15 hover:shadow-teal-300/30">
                    <a class=" p-1" href='https://www.linkedin.com/in/sebastianbonilla13'>
                      <FaLinkedin color="#e2e8f0" class="w-10 h-10 p-2" />
                    </a>
                  </div> */}

                  <ToolTip1 position="bottom" tooltipsText="GitHub">
                    <div class="p-5 bg-transparent  w-10 h-10 rounded-full inline-flex items-center justify-center  border-2 border-slate-200 shadow-lg shadow-slate-300/15 hover:shadow-teal-300/30">
                      <a class=" p-1" href='https://github.com/SebastianBonilla13'>
                        <FaGithub color="#e2e8f0" class="w-10 h-10 p-2" />
                      </a>
                    </div>
                  </ToolTip1>


                </div>



                {/* <div class="p-5 bg-transparent  w-10 h-10 rounded-full inline-flex items-center justify-center  border-2 border-slate-200 shadow-lg hover:shadow-teal-300/35">
                  <a class=" p-1" href='https://www.linkedin.com/in/sebastianbonilla13'>
                    <FaLinkedin color="#e2e8f0" class="w-10 h-10 p-2" />
                  </a>
                </div> */}



                {/* <div class="p-5"> */}
                {/* <div class="w-10 border-opacity h-10 rounded-full inline-flex items-center justify-center relative z-10 border-solid border-2 border-slate-200">
                    <a class=" " href='https://github.com/SebastianBonilla13'>
                      <FaGithub color="#e2e8f0" class="w-10 h-10 p-2 zinc-700" />
                    </a>
                  </div> */}
                {/* <div class="p-5 bg-transparent  w-10 h-10 rounded-full inline-flex items-center justify-center  border-2 border-slate-200 shadow-lg shadow-slate-300/15 hover:shadow-teal-300/30">
                    <a class=" p-1" href='https://github.com/SebastianBonilla13'>
                      <FaGithub color="#e2e8f0" class="w-10 h-10 p-2" />
                    </a>
                  </div> */}

                {/* </div> */}

              </div>
            </div>

            {/* TEXTO */}
            <div class="grid gap-y-5 pt-3">

              {/* NAME */}
              <div class="text-left">
                {/* <span class="absolute mr-5 mx-auto py-0 flex border w-fit pl- bg-gradient-to-r blur-xl from-teal-300 via-sky-200 to-cyan-400 bg-clip-text text-5xl box-content  text-transparent  select-none">
                  <a class="underline decoration-blue-300"> Sebastián Bonilla </a>
                </span> */}
                <h1 class="sm:text-5xl text-4xl font-extrabold text-slate-200 text-color_primary ">
                  Sebastián Bonilla
                </h1>
                {/* <span class="absolute mr-5 mx-auto py-0 flex border w-fit bg-gradient-to-r blur-xl from-teal-300 via-sky-200 to-cyan-400 bg-clip-text text-4xl box-content font-extrabold text-transparent  select-none">
                  <a class="underline decoration-blue-300"> Sebastián Bonilla</a>
                </span>
                <span
                  class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-200 to-cyan-400">
                  Sebastián Bonilla
                </span> */}
              </div>

              {/* <h2 class="text-3xl font-bold text-slate-300 text-color_primary" >
                  Software Developer
                </h2> */}

              {/* <div>
                
                <span class="absolute mr-5 x-auto py-0  font-extrabold flex border w-fit bg-gradient-to-r blur-2xl from-teal-300 via-sky-200 to-cyan-400 bg-clip-text text-4xl box-content  text-transparent  select-none">
                  <a class="underline decoration-blue-300"> Front-End Developer </a>
                </span>
                <span
                  class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-200 to-teal-300">
                  Front-End Developer
                </span>
              </div> */}

              <div>
                <span
                  class="sm:text-4xl text-3xl absolute mr-6  font-extrabold text-transparent bg-clip-text blur-xl bg-gradient-to-r from-teal-300 via-sky-200 to-cyan-400">
                  Front-End Developer
                </span>
                <span
                  class="sm:text-4xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-200 to-cyan-400">
                  Front-End Developer
                </span>
              </div>

              <div>
                <p class="text-base font-medium text-slate-300 text-color_primary max-w-2xl">
                  Apasionado del diseño, combino habilidades de programación para crear interfaces limpias,
                  intuitivas y accesibles. Supero las expectativas de los usuarios, entregando experiencias
                  digitales atractivas y fáciles de usar.
                </p>
              </div>

            </div>

          </div>

          {/* section PROYECTOS */}
          <div id="proyectos" class="pt-10 mb-64">

            <span class="absolute mr-5 x-auto py-0  font-extrabold flex border w-fit bg-gradient-to-r blur-xl from-teal-500 via-sky-600 to-cyan-800 bg-clip-text text-xl box-content  text-transparent  select-none">
              <a class="underline decoration-blue-300">PROYECTOS</a>
            </span>
            <h2 class="text-xl font-extrabold text-slate-200 text-color_primary" >
              PROYECTOS
            </h2>

            {/* Proyecto 1 */}
            <div class="flex justify-center pt-8 sm:mx-8">
              <CardProject
                image={imgReportesPlus}
                /* Reportes Plus */
                tittle={
                  <>
                    {/* <a class="text-slate-200">Reportes Plus</a> */}
                    <span
                      class="ext-base ont-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-200 to-cyan-400">
                      Reportes Plus
                    </span>
                  </>
                  
                }
                description={
                  <>
                    <div class="text-slate-300">
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
            {/* <div class="flex justify-center pt-8 sm:mx-8">
              <CardProject
                image={imgReportesPlus}
                tittle={
                  <>
                    <a class="text-slate-200">Reportes Plus</a>
                  </>
                }
                description={
                  <>
                    <div class="text-slate-300">
                      Información Presupuestal Universidad del Cauca. Proporcionar a los usuarios
                      finales del área financiera e interesados de la  universidad, una herramienta
                      que les permita consultar y descargar  información presupuestal en tiempo real.
                    </div>
                  </>
                }
                lstTech={lstTechP1}>
              </CardProject>
            </div> */}

          </div>

          {/* section EXPERIENCIA */}
          <div id="experiencia" class="pt-10 mb-28">

            <span class="absolute mr-5 x-auto py-0  font-extrabold flex border w-fit bg-gradient-to-r blur-xl from-teal-500 via-sky-600 to-cyan-800 bg-clip-text text-xl box-content  text-transparent  select-none">
              <a class="underline decoration-blue-300">EXPERIENCIA</a>
            </span>
            <h2 class="text-xl font-extrabold text-slate-200 text-color_primary" >
              EXPERIENCIA
            </h2>

            {/* Experiencia 1 */}
            <div class="flex justify-center pt-8 sm:mx-8">
              <TableInfo
                tittle={
                  <>
                    {/* <a class="text-slate-200">Ingeniero de Sistemas - Universidad del Cauca</a> */}
                    {/* <span
                      class="absolute mr-6 ext-base ont-extrabold text-transparent bg-clip-text blur-xl bg-gradient-to-r from-teal-300 via-sky-200 to-cyan-400">
                      Ingeniero de Sistemas - Universidad del Cauca
                    </span> */}
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
                    {/* <a class="text-slate-200">Fronted Developer - ONE (Oracle Next Education)</a> */}
                    {/* <span
                      class="absolute mr-6 ext-base ont-extrabold text-transparent bg-clip-text blur-xl bg-gradient-to-r from-teal-300 via-sky-200 to-cyan-400">
                      Fronted Developer - ONE (Oracle Next Education)
                    </span> */}
                    <span
                      class="ext-base ont-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-200 to-cyan-400">
                      Fronted Developer - ONE (Oracle Next Education)
                    </span>
                  </>
                }
                date={
                  <>
                    <a class="text-slate-400">2024 - PRESENTE</a>
                  </>
                }
                description={
                  <>
                    <div class="text-slate-300">
                      <a class="underline decoration-teal-300"> <strong>Front-End:</strong></a> Construcción de páginas web responsivas con HTML, CSS y JavaScript.<br />
                      <a class="underline decoration-teal-300"> <strong>React con JavaScript:</strong></a> Creación de interfaces de usuarios.<br />
                      <a class="underline decoration-teal-300"> <strong>IA en el Front-End:</strong></a> Optimización de desarrollo y generación de experiencias innovadoras.
                    </div>
                  </>
                }
                lstTech={lstTechE2}>
              </TableInfo>
            </div>

          </div>

          {/* section ¿? */}
          <div id="¿?" class="mt-80 mb-72 g-red-400 ">
            <div class="py-3"> {/* text-center */}
              {/* <h2 class="text-3xl font-bold text-slate-300 text-color_primary py-52" >
                ¿Te interesa impulsar tu proyecto al siguiente nivel? ¡Hagámoslo realidad!
              </h2> */}
              {/* <h2 class="text-xl py-52 md:text-3xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.500),theme(colors.blue.200),theme(colors.blue.100),theme(colors.neutral.200),theme(colors.purple.200),theme(colors.purple.500))] bg-[length:100%_auto] animate-gradient">¿Te interesa impulsar tu proyecto al siguiente nivel? <a class="underline decoration-blue-300"> ¡Hagámoslo realidad!</a></h2>*/}

              {/* <h1
                class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-slate-400 to-stone-500 ">

                ¿Te interesa impulsar tu proyecto al siguiente nivel? <a class="underline decoration-blue-300"> ¡Hagámoslo realidad!</a>

              </h1> */}


              <h1
                class="sm:text-4xl text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-300 to-cyan-600">
                ¿Te interesa impulsar tu proyecto al siguiente nivel?
              </h1>
              <br></br>

              {/* <span class=" absolute r-5 x-auto py-0 lex order  bg-gradient-to-r lur-xl from-teal-300 via-sky-200 to-cyan-400 bg-clip-text text-4xl ox-content font-extrabold text-transparent  elect-none">
                ¡Hagámoslo realidad!
              </span> */}
              <span
                class="sm:text-4xl text-2xl absolute mr-6  font-extrabold text-transparent bg-clip-text blur-xl bg-gradient-to-r from-teal-300 via-sky-200 to-cyan-400">
                ¡Hagámoslo realidad!
              </span>
              <span
                class="sm:text-4xl text-2xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-200 to-cyan-400">
                ¡Hagámoslo realidad!
              </span>

            </div>
          </div>

        </div>
      </main>

    </div>



  );
}

export default App;


