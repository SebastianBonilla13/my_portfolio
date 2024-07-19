import imgReportesPlus from "../Assets/imgReportesPlus.png";
import Badge from "./Badge.jsx";

function CardProject() {
    return (

        <div class="group p-6  rounded-3xl pl-6 border-solid border-2 border-slate-300 bg-slate-200 w-full"> {/* pt-48 pl-6 bg-lime-300 */}

            <div class="group-hover:h-aut">

            
            {/*  */}

            <div class="flex justify-center ">
                <div class="w-2/ w-full group-hover:w-2/3 transition-all duration-700 ease-out">
                    <img class="" src={imgReportesPlus} /* style={{ width: "40%", paddingTop: "50px" }}  */ />
                </div>
            </div>

            <div class="group-hover:h-0">
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
            </div>


            

            {/* <img class="right-5 absolute w-[250px] group-hover:w-[500px]  group-hover:h-auto transition-all duration-700 ease-out" src="/assets/tensei2-3STPUW1i.webp" alt="Photo Tensei" style="transform: none;"></img>
 */}


            {/*  */}

            </div>
        </div>

    );
}

export default CardProject;

