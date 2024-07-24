/* import * as React from 'react'; */

import { FaRegFolderOpen, FaSuitcase } from "react-icons/fa6";
import { FaSmileWink, FaClipboardList } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

/* import DynamicReactIcons from "./DynamicReactIcons"; */ /* gestión de iconos dinámicos */

function Sidebar() {

    return (
        <section class="w-full"> {/* text-gray-600 */}

            <div class="container px-5 py-24 mx-auto flex flex-wrap h-full "> {/* bg-slate-700  */}

                <div class="flex justify-center w-full 2xl:justify-end"> {/* asdasda */}

                    <div class="lg:w-max md:w-1/2  content-center"> {/* content icos AAQUI */} {/* bg-slate-500 */}

                        {/* OPTION SOBRE MI */}
                        <div class="flex relative pb-12">
                            <Line />
                            <a class=" flex w-full " href="#sobremi"> {/* bg-red-300 */}
                                <Icon Iconn={IoMdPerson} />
                                <Text textOption={"SOBRE MI"} />
                            </a>
                        </div>

                        {/* OPTION PROYECTOS */}
                        <div class="flex relative pb-12">
                            <Line />
                            <a class=" flex w-full" href="#proyectos"> {/* bg-red-300 */}
                                <Icon class="" Iconn={FaRegFolderOpen} />
                                <Text textOption={"PROYECTOS"} />
                            </a>
                        </div>

                        {/* OPTION EXPERIENCIA */}
                        <div class="flex relative pb-12">
                            <Line />
                            <a class=" flex w-full" href="#experiencia"> {/* bg-red-300 */}
                                <Icon Iconn={FaSuitcase} />
                                <Text textOption={"EXPERIENCIA"} />
                            </a>
                        </div>

                        {/* OPTION ¿? */}
                        <div class="flex relative">
                            <Line />
                            <a class=" flex w-full" href="#¿?">
                                <Icon Iconn={FaSmileWink} />
                                <Text textOption={"¿ ?"} />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}


const Line = () => {
    return (
        <div class="h-full pt-12 w-12 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-0.5 bg-slate-200 pointer-events-none"></div>
        </div>
    );
};

{/* <div class="w-12 h-12 rounded-full border-b-green-400  inline-flex items-center justify-center relative z-10 order-solid border-2 border-x-violet-400">
            <a class="bg-orange-200 w-6 h-6" href='https://github.com/SebastianBonilla13'> 
                {nameIcon && <DynamicReactIcons class="w-full h-full" iconNamee={nameIcon} />}
            </a>
        </div> */}

const Icon = ({ Iconn }) => {
    return (

        <div class="w-12 h-12 rounded-full inline-flex items-center justify-center relative z-10 order-solid border-2 border-slate-200 shadow-xl shadow-teal-300/15 hover:shadow-teal-300/40">
            <a class=" ">
                <Iconn class="w-10 h-10 p-2" color="#E2E8F0" />
                {/* <DynamicReactIcons class="w-8 h-8 p-0" iconNamee={nameIcon}  /> */}
            </a>
        </div>
    );
};

const Text = ({ textOption }) => {
    return (

        <div class="flex-grow pl-4 pt-3">
            
            <span class="absolute mr-5 x-auto py-0  font-bold flex border w-fit bg-gradient-to-r blur-lg hover:blur-sm from-teal-400 via-sky-300 to-cyan-600 bg-clip-text text-sm box-content  text-transparent  select-none ">
                <a class="underline decoration-blue-300">{textOption}</a>
            </span>
            <h2 class="text-sm font-bold text-slate-300 text-color_primary" >
                {textOption}
            </h2>

            {/* <h2 class="font-medium title-font text-sm text-slate-200 mb-1 tracking-wider">{textOption}</h2> */}
            {/* <p class="leading-relaxed">Alguna descripción corta, como para el uso de pasosss.</p> */}
        </div>
    );
};

export default Sidebar;

