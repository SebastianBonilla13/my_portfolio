/* import * as React from 'react'; */

import DynamicReactIcons from "./DynamicReactIcons"; /* gestión de iconos dinámicos */

function Sidebar() {

    return (

        <header class="hidden lg:flex lg:w-1/3 bg-color_primary lg:sticky lg:top-0 right-0  lg:max-h-screen w-max"> {/* SIDEAR */}  {/* bg-color_primary  lg:flex  lg:max-h-screen */}
            {/* <h1>Sidebar</h1> */}


            <section class="body-font w-full"> {/* text-gray-600 */}

                <div class="container px-5 py-24 mx-auto flex flex-wrap h-full "> {/* bg-slate-700  */}

                    <div class="flex justify-center w-full"> {/* asdasda */}

                        <div class="lg:w-max md:w-1/2  content-center"> {/* content icos AAQUI */} {/* bg-slate-500 */}
                            
                            {/* OPTION SOBRE MI */}
                            <div class="flex relative pb-12">
                                <Line />
                                <a class=" flex w-full " href="https://www.google.com/?hl=es"> {/* bg-red-300 */}
                                    <Icon nameIcon={"IoMdPerson"} />
                                    <Text textOption={"SOBRE MI"}/>
                                </a>
                            </div>

                            {/* OPTION EXPERIENCIA */}
                            <div class="flex relative pb-12">
                                {/* LINE */}
                                <Line />
                                <a class=" flex w-full" href="https://www.google.com/?hl=es"> {/* bg-red-300 */}
                                    <Icon nameIcon={"FaSuitcase"} />
                                    <Text textOption={"EXPERIENCIA"}/>
                                </a>
                            </div>

                            {/* OPTION ¿? */}
                            <div class="flex relative pb-12">
                                <Line />
                                <a class=" flex w-full" href="https://www.google.com/?hl=es"> {/* bg-red-300 */}
                                    <Icon nameIcon={"FaSmileWink"} />
                                    <Text textOption={"¿ ?"}/>
                                </a>
                            </div>
                            
                            {/* OPTION PROYECTOS */}
                            <div class="flex relative">
                                <a class=" flex w-full " href="wwww.google.com"> {/* bg-red-300 */}
                                    <Icon nameIcon={"FaRegFolderOpen"} />
                                    <Text textOption={"PROYECTOS"}/>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </header>
    );
}


const Line = () => {
    return (
        <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-0.5 bg-black pointer-events-none"></div>
        </div>
    );
};

const Icon = ({nameIcon}) => {
    return (
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white  inline-flex items-center justify-center relative z-10 order-solid border-2 border-black"> {/* text-lime-500  */}
            <a class=" " href='https://github.com/SebastianBonilla13'> {/* border-cyan-800 */}
                {nameIcon && <DynamicReactIcons class="to-black" iconNamee={nameIcon} />}
            </a>
        </div>
    );
};

const Text = ({textOption}) => {
    return (
        <div class="flex-grow pl-4 pt-3">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">{textOption}</h2>
            {/* <p class="leading-relaxed">Alguna descripción corta, como para el uso de pasosss.</p> */}
        </div>
    );
};

export default Sidebar;

