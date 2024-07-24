/* import imgReportesPlus from "../Assets/imgReportesPlus.png"; */
import Badge from "./Badge.jsx";



function CardProject({ image, tittle, description, lstTech }) {
    return (
        <div class="group p-0 rounded-3xl w-full overflow-hidden   ring-1 ring-white ring-opacity-10 bg-white bg-opacity-5 shadow-lg shadow-teal-300/15 hover:shadow-teal-300/30"> {/* pt-48 pl-6 bg-lime-300 */}
            <div class="group-hover:h-auto group-hover:p-6 transition-all duration-1000 ease-in-out  ">

                <div class="flex justify-center  ">
                    <div class=" w-full  group-hover:w-1/2 transition-all duration-1000 ease-in-out  ">
                        <img class="" src={image} />
                    </div>
                </div>

                <div class="h-0 hidden group-hover:flex group-hover:h-full"> {/* group-hover:h-0 */}
                    <div class="group-hover:z-10 group-hover:inset-0  group-hover:items-center bg-red-30 roup-hover:pl-0 roup-hover:opacity-0  transition-all duration-1000 ase-out "> {/* group-hover:pl-0 group-hover:opacity-0  */}
                        <div class="flex flex-col gap-y-2">
                            <span class="text-2xl font-bold pt-2"> {tittle} </span> {/* max-w-[13ch] */}
                            <p class=" mb-2 "> {description} </p>
                            <div class="flex flex-wrap gap-2">
                                {lstTech.map((lechnology) => (
                                    <Badge Text={lechnology} key={lechnology} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div class="group-hover:h-0">
                    <div class="z-10 inset-0 flex items-center bg-red-30 group-hover:pl-0 group-hover:opacity-0  transition-all duration-300 ease-out">
                        <div class="flex flex-col gap-y-2">
                            <span class="text-2xl font-bold max-w-[13ch]">Reportes Plus</span>
                            <p class=" mb-2 w-full"> Información Presupuestal Universidad del Cauca. Proporcionar a los usuarios
                                finales del área financiera e interesados de la  universidad, una herramienta
                                que les permita consultar y descargar  información presupuestal en tiempo real.</p>
                            <div class="flex flex-wrap gap-3">
                                <Badge Text={"HTML"} > </Badge>
                                <Badge Text={"Boostrap"} > </Badge>
                                <Badge Text={"JavaScript"} > </Badge>
                                <Badge Text={"React"}> </Badge>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* <img class="right-5 absolute w-[250px] group-hover:w-[500px]  group-hover:h-auto transition-all duration-700 ease-out" src="/assets/tensei2-3STPUW1i.webp" alt="Photo Tensei" style="transform: none;"></img>
 */}


                {/*  */}

            </div>
        </div>

    );
}

export default CardProject;

