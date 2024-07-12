/* import logo from './logo.svg'; */

/* import './App.css'; */

import { FaGithub, FaLinkedin, FaRegFolderOpen, FaSuitcase      } from "react-icons/fa6";
import { FaSmileWink, FaClipboardList } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

/* import { FaClipboardList } from "react-icons/fa"; */

import imgSebastianBonilla from "./Assets/imgSebastianBonilla.jpg";

//import "./";

/* import Chip from "./Components/Badges.jsx"; */


function App() {
  return (

    <div class="lg:flex justify-between static"> {/* STRUCT */}

      <header class="lg:w-1/3 bg-color_primary lg:sticky lg:top-0 right-0  lg:flex lg:max-h-screen w-max"> {/* SIDEAR */}  {/* bg-color_primary  lg:flex  lg:max-h-screen */}
        {/* <h1>Sidebar</h1> */}

        <section class=" body-font w-full"> {/* text-gray-600 */}

          <div class="container px-5 py-24 mx-auto flex flex-wrap h-full "> {/* bg-slate-700  */}

            <div class="flex justify-center w-full"> {/* asdasda */}

              <div class="lg:w-max md:w-1/2  content-center"> {/* content icos AAQUI */} {/* bg-slate-500 */}

                {/* <div class="flex relative pb-12 bg-slate-400 ">
                  <div class=" h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4 pt-3">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">ACERCA DE MI</h2>
                    
                  </div>
                </div> */}

                <div class="flex relative pb-12">
                  {/* LINE */}
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-0.5 bg-black pointer-events-none"></div>
                  </div>

                  {/* SELECT SOBRE MI */}
                  <a class=" flex w-full " href="wwww.google.com"> {/* bg-red-300 */}
                    {/* ICON */}
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white inline-flex items-center justify-center text-white relative z-10 order-solid border-2 border-black">
                      <a class=" " href='https://github.com/SebastianBonilla13'> {/* border-cyan-800 */}
                        <IoMdPerson color="black" class="w-9 h-9 p-2" /> {/* bg-orange-500 */}
                      </a>
                    </div>
                    {/* TEXT */}
                    <div class="flex-grow pl-4 pt-3">
                      <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">SOBRE MI</h2>
                      {/* <p class="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p> */}
                    </div>
                  </a>
                </div>

                <div class="flex relative pb-12">
                  {/* LINE */}
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-0.5 bg-black pointer-events-none"></div>
                  </div>

                  {/* SELECT EXPERIENCIA */}
                  <a class=" flex w-full" href="wwww.google.com"> {/* bg-red-300 */}
                    {/* ICON */}
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white  inline-flex items-center justify-center text-white relative z-10 order-solid border-2 border-black">
                      <a class=" " href='https://github.com/SebastianBonilla13'> {/* border-cyan-800 */}
                        <FaSuitcase color="black" class="w-8 h-8 p-2" /> {/* bg-orange-500 */}
                      </a>
                    </div>
                    {/* TEXT */}
                    <div class="flex-grow pl-4 pt-3">
                      <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">EXPERIENCIA</h2>
                      {/* <p class="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p> */}
                    </div>
                  </a>
                </div>

                <div class="flex relative pb-12">
                  {/* LINE */}
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-0.5 bg-black pointer-events-none"></div>
                  </div>

                  {/* SELECT ¿? */}
                  <a class=" flex w-full" href="wwww.google.com"> {/* bg-red-300 */}
                    {/* ICON */}
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white  inline-flex items-center justify-center text-white relative z-10 order-solid border-2 border-black">
                      <a class=" " href='https://github.com/SebastianBonilla13'> {/* border-cyan-800 */}
                        <FaSmileWink color="black" class="w-9 h-9 p-2" /> {/* bg-orange-500 */}
                      </a>
                    </div>
                    {/* TEXT */}
                    <div class="flex-grow pl-4 pt-3">
                      <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">¿?</h2>
                      {/* <p class="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p> */}
                    </div>
                  </a>
                </div>


                <div class="flex relative">
                  {/* LINE */}
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center  ">
                    <div class="h-full w-0.5  pointer-events-none"></div>
                  </div>

                  {/* SELECT PROYECTO */}
                  <a class=" flex w-full " href="wwww.google.com"> {/* bg-red-300 */}
                    {/* ICON */}
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white  inline-flex items-center justify-center text-white relative z-10 order-solid border-2 border-black">
                      <a class=" " href='https://github.com/SebastianBonilla13'> {/* border-cyan-800 */}
                        <FaRegFolderOpen color="black" class="w-9 h-9 p-2" /> {/* bg-orange-500 */}
                      </a>
                    </div>
                    {/* TEXT */}
                    <div class="flex-grow pl-4 pt-3">
                      <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">PROYECTOS</h2>
                      {/* <p class="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p> */}
                    </div>
                  </a>
                </div>

                {/* <div class="flex relative">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                    <p class="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
                  </div>
                </div> */}

              </div>

            </div>
            {/* asdas */}


            {/* <div class="flex relative pb-12">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
              </div>
            </div>
 */}


          </div>
        </section>



      </header>

      <main class="lg:w-2/3 px-28 pt-10 "> {/* BODY */} {/* bg-lime-200 */}

        <div class="flex justify-center "> {/* IMAGE CONTAINER */}  {/* bg-orange-500 min-w-64 */}
          <div class="w-52 border-solid border-color_primary border-black  border-8 rounded-full overflow-hidden ">
            <img src={imgSebastianBonilla} /* style={{ width: "40%", paddingTop: "50px" }}  */ />
          </div>
        </div>

        <div class="flex justify-center "> {/* ICONS CONTAINER */} {/* bg-slate-600 */}
          <div class="py-2 gap-x-5 grid grid-cols-2 grid-flow-row"> {/* bg-slate-600 */}

            <div class="p-5"> {/* bg-amber-300 */} {/* ICON */}
              <a class=" " href='https://github.com/SebastianBonilla13'> {/* border-cyan-800 */}
                <FaLinkedin class="w-11 h-11 p-2" /> {/* bg-orange-500 */}
              </a>
            </div>

            <div class="p-5"> {/* bg-amber-300 */}
              <a class=" " href='https://github.com/SebastianBonilla13'> {/* border-cyan-800 */}
                <FaGithub class="w-11 h-11 p-2" /> {/* bg-orange-500 */}
              </a>
            </div>

            {/* <div class="">
              <a class="bg-amber-300" href='https://www.linkedin.com/in/sebastianbonilla13/'>
                <FaLinkedin class="bg-orange-500 w-10 h-10 p-1"/>
              </a>
            </div> */}

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
              
              
            </p>
          </div>
          
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


