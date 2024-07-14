/* import logo from './logo.svg'; */

/* import './App.css'; */
import Sidebar from "../src/Components/Sidebar.jsx";

import { FaGithub, FaLinkedin, FaRegFolderOpen, FaSuitcase      } from "react-icons/fa6";
import { FaSmileWink, FaClipboardList } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

// en sidebar, (quitar luego)
/* FaRegFolderOpen
FaSuitcase
FaSmileWink
IoMdPerson */


import imgSebastianBonilla from "./Assets/imgSebastianBonilla3.png";




function App() {
  return (

    <div class="flex justify-between static"> {/* STRUCT */}

      <Sidebar> </Sidebar>

      <main class="lg:w-2/3 px-20 pt-10 "> {/* BODY */} {/* bg-lime-200 */}

        <div class="flex justify-center "> {/* IMAGE CONTAINER */}  {/* bg-orange-500 min-w-64 */}
          <div class="w-52 border-solid border-color_primary border-black  border-8 rounded-full overflow-hidden ">
            <img src={imgSebastianBonilla} /* style={{ width: "40%", paddingTop: "50px" }}  */ />
          </div>
        </div>

        <div class="flex justify-center "> {/* ICONS CONTAINER */} {/* bg-slate-600 */}
          <div class="py-2 gap-x-5 grid grid-cols-2 grid-flow-row"> {/* bg-slate-600 */}

            <div class="p-5"> {/* bg-amber-300 */} {/* ICON */}
              <a class=" " href='https://www.linkedin.com/in/sebastianbonilla13'> {/* border-cyan-800 */}
                <FaLinkedin class="w-11 h-11 p-2" /> {/* bg-orange-500 */}
              </a>
            </div>

            <div class="p-5"> {/* bg-amber-300 */}
              <a class=" " href='https://github.com/SebastianBonilla13'> {/* border-cyan-800 */}
                <FaGithub class="w-11 h-11 p-2" /> {/* bg-orange-500 */}
              </a>
            </div>

          </div>
        </div>

        <div class="grid gap-y-5">

          <div class="text-left"> {/* NAME */}
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
            <p class="text-color_primary">
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
            <p class="text-color_primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>

          <div>
            <p class="text-color_primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>

          <div>
            <p class="text-color_primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>

        </div>


      </main>

    </div>



  );
}

export default App;


