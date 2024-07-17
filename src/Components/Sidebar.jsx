/* import * as React from 'react'; */

import { FaRegFolderOpen, FaSuitcase } from "react-icons/fa6";
import { FaSmileWink, FaClipboardList } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

/* import DynamicReactIcons from "./DynamicReactIcons"; */ /* gestión de iconos dinámicos */

function Sidebar() {

    return (
        <section class="body-font w-full"> {/* text-gray-600 */}

            <div class="container px-5 py-24 mx-auto flex flex-wrap h-full "> {/* bg-slate-700  */}

                <div class="flex justify-center w-full 2xl:justify-end"> {/* asdasda */}

                    <div class="lg:w-max md:w-1/2  content-center"> {/* content icos AAQUI */} {/* bg-slate-500 */}

                        {/* OPTION SOBRE MI */}
                        <div class="flex relative pb-12">
                            <Line />
                            <a class=" flex w-full " href="https://www.google.com/?hl=es"> {/* bg-red-300 */}
                                <Icon Iconn={IoMdPerson} />
                                <Text textOption={"SOBRE MI"} />
                            </a>
                        </div>

                        {/* OPTION PROYECTOS */}
                        <div class="flex relative pb-12">
                            <Line />
                            <a class=" flex w-full " href="wwww.google.com"> {/* bg-red-300 */}
                                <Icon Iconn={FaRegFolderOpen} />
                                <Text textOption={"PROYECTOS"} />
                            </a>
                        </div>

                        {/* OPTION ¿? */}
                        <div class="flex relative pb-12">
                            <Line />
                            <a class=" flex w-full" href="https://www.google.com/?hl=es"> {/* bg-red-300 */}
                                <Icon Iconn={FaSmileWink} />
                                <Text textOption={"¿ ?"} />
                            </a>
                        </div>

                        {/* OPTION EXPERIENCIA */}
                        <div class="flex relative">
                            {/* <Line /> */}
                            <a class=" flex w-full" href="https://www.google.com/?hl=es"> {/* bg-red-300 */}
                                <Icon Iconn={FaSuitcase} />
                                <Text textOption={"EXPERIENCIA"} />
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
        <div class="h-full w-12 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-0.5 bg-black pointer-events-none"></div>
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

        <div class="w-12 h-12 bg-white rounded-full inline-flex items-center justify-center relative z-10 order-solid border-2 border-black">
            <a class=" " href='https://github.com/SebastianBonilla13'> 
                    <Iconn class="w-10 h-10 p-2" />
                    {/* <DynamicReactIcons class="w-8 h-8 p-0" iconNamee={nameIcon}  /> */}
            </a>
        </div>
    );
};

const Text = ({ textOption }) => {
    return (
        <div class="flex-grow pl-4 pt-3">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">{textOption}</h2>
            {/* <p class="leading-relaxed">Alguna descripción corta, como para el uso de pasosss.</p> */}
        </div>
    );
};

export default Sidebar;

