/* import logo from './logo.svg'; */

/* import './App.css'; */
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




function App() {
  return (

    <div class="flex justify-between static"> {/* STRUCT */}

      <header class="hidden lg:flex lg:w-1/3 bg-color_primary lg:sticky lg:top-0 right-0  lg:max-h-screen w-max"> {/* SIDEAR */}  {/* bg-color_primary  lg:flex  lg:max-h-screen */}
        <Sidebar> </Sidebar>
      </header>


      <main class="lg:w-2/3"> {/* BODY */} {/* bg-lime-200 */}

        <Badge Icon={FaSmileWink} Text={"HOLA"}> </Badge>

        <div class="lg:max-w-4xl px-6 sm:px-20 pt-10 ">  {/* sm:px-1/6 bg-red-400 */}

          {/* IMAGE CONTAINER */}
          <div class="flex justify-center ">
            <div class="w-52 border-solid border-color_primary border-black  border-8 rounded-full overflow-hidden ">
              <img src={imgSebastianBonilla} />
            </div>
          </div>

          <div class="flex justify-center "> {/* ICONS CONTAINER */} {/* bg-slate-600 */}

            <div class="pt-1 pb-6 gap-x-5 grid grid-cols-2 grid-flow-row"> {/* bg-slate-600 */}

              {/* bg-amber-300 */} {/* ICON */}
              {/* <div class="p-5"> 
                <a class=" " href='https://www.linkedin.com/in/sebastianbonilla13'>
                  <FaLinkedin class="w-11 h-11 p-2" />
                </a>
              </div>

              <div class="p-5"> 
                <a class=" " href='https://github.com/SebastianBonilla13'> 
                  <FaGithub class="w-11 h-11 p-2" /> 
                </a>
              </div> */}



              <div class="p-5">
                <div class="w-10 border-opacity h-10 rounded-full inline-flex items-center justify-center relative z-10 order-solid border-2 border-black">
                  <a class=" " href='https://www.linkedin.com/in/sebastianbonilla13'>
                    <FaLinkedin class="w-10 h-10 p-2" />
                  </a>
                </div>
              </div>

              <div class="p-5">
                <div class="w-10 border-opacity h-10 rounded-full inline-flex items-center justify-center relative z-10 border-solid border-2 border-black">
                  <a class=" " href='https://github.com/SebastianBonilla13'>
                    <FaGithub class="w-10 h-10 p-2" />
                  </a>
                </div>
              </div>





            </div>
          </div>

          <div class="grid gap-y-4 ">
            
            {/* NAME */}
            <div class="text-left"> 
              <h1 class="text-5xl font-bold text-color_primary ">
                Sebastián Bonilla
              </h1>
            </div>

            <div>
              <h2 class="text-3xl font-bold text-color_primary" >
                Software Developer
              </h2>
            </div>

            <div>
              <p class="text-base text-color_primary max-w-xl">
                Apasionado del diseño, combino habilidades de programación para crear interfaces limpias,
                intuitivas y accesibles. Supero las expectativas de los usuarios, entregando experiencias
                digitales atractivas y fáciles de usar.
              </p>
            </div>


            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <div>
              <h2 class="text-xl font-bold text-color_primary" >
                PROYECTOS
              </h2>
            </div>

            <div class="flex justify-center pt-4 sm:mx-8">
              <CardProject> </CardProject>  
            </div>
            
            <div class="flex justify-center pt-10 sm:mx-8">
              <CardProject> </CardProject>  
            </div>

            <div class="flex justify-center pt-10 sm:mx-8">
              <CardProject> </CardProject>  
            </div>

            

            <div>
              <h2 class="text-xl font-bold text-color_primary pt-10" >
                EXPERIENCIA
              </h2>
            </div>

            <div class="flex justify-center pt-4 sm:mx-8">
              <TableInfo> </TableInfo>
            </div>

            {/* <div class="flex justify-center pt-6">
              <TableInfo> </TableInfo>
            </div> */}
            

            



            <br></br>
            <br></br>
            <br></br>
            <br></br>



            {/* <div>
              <p class="text-color_primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div> */}



          </div>

        </div>
      </main>

    </div>



  );
}

export default App;


