/* import logo from './logo.svg'; */

/* import './App.css'; */
import Sidebar from "../src/Components/Sidebar.jsx";

import Card from "../src/Components/Card.jsx";
import Info from "./Components/TableInfo.jsx";

import { FaGithub, FaLinkedin, FaRegFolderOpen, FaSuitcase      } from "react-icons/fa6";
import { FaSmileWink, FaClipboardList } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

// en sidebar, (quitar luego)
/* FaRegFolderOpen
FaSuitcase
FaSmileWink
IoMdPerson */



import imgSebastianBonilla from "./Assets/imgSebastianBonillaa.jpg";




function App() {
  return (

    <div class="flex justify-between static"> {/* STRUCT */}
      
      <header class="hidden lg:flex lg:w-1/3 bg-color_primary lg:sticky lg:top-0 right-0  lg:max-h-screen w-max"> {/* SIDEAR */}  {/* bg-color_primary  lg:flex  lg:max-h-screen */}
        <Sidebar> </Sidebar>
      </header>
      

      <main class="lg:w-2/3"> {/* BODY */} {/* bg-lime-200 */}

        <div class="lg:max-w-4xl px-6 sm:px-20 pt-10 bg-red-400">  {/* sm:px-1/6 */}

        
        <div class="flex justify-center "> {/* IMAGE CONTAINER */}  {/* bg-orange-500 min-w-64 */}
          <div class="w-52 border-solid border-color_primary border-black  border-8 rounded-full overflow-hidden ">
            <img src={imgSebastianBonilla} /* style={{ width: "40%", paddingTop: "50px" }}  */ />
          </div>
        </div>

        <div class="flex justify-center "> {/* ICONS CONTAINER */} {/* bg-slate-600 */}
          
          <div class="pt-2 pb-8 gap-x-5 grid grid-cols-2 grid-flow-row"> {/* bg-slate-600 */}

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

        <div class="grid gap-y-5 ">

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
            <p class="text-color_primary ">
            Apasionado del diseño, combino habilidades de programación para crear interfaces limpias, 
            intuitivas y accesibles. Supero las expectativas de los usuarios, entregando experiencias 
            digitales atractivas y fáciles de usar.
              
              
            </p>
          </div>
          

          <br></br>

          {/* <div class="flex justify-center">
            <Card> </Card>  
          </div> */}


          <div class="flex justify-center">
            <Info> </Info>  
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

        </div>
      </main>

    </div>



  );
}

export default App;


