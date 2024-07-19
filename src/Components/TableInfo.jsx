import Badge from "./Badge.jsx";
import { IoMdPerson } from "react-icons/io";

function TableInfo({ titulo, fecha, descripcion, lstIconos }) {
    return (
        <div class="p-6 rounded-3xl pl-6 border-solid border-2 border-slate-300 bg-slate-200"> {/* pt-48 pl-6 bg-lime-300 */}
            <div class="grid auto-rows-auto md:grid-flow-col lg:grid-flow-col gap-6">
                <div class="md:row-span-3 lg:row-span-3 text-lef text-base">2018 - 2024</div> {/* bg-slate-200 */}
                <div class="  text-xl">Ingeniero de Sistemas - Universidad del Cauca</div> {/* bg-slate-700 */}
                <div class="  text-base">
                    Estudiante de último semestre de Ingeniería de Sistemas
                    en la Universidad del Cauca, donde he adquirido conocimientos sólidos en
                    áreas como programación, análisis de sistemas y gestión de proyectos.
                    Durante mi trayectoria académica he participado en diversos proyectos que
                    me han permitido explorar y desarrollar habilidades en diferentes lenguajes
                    de programación y tecnologías emergentes, aplicando mis conocimientos en un
                    entorno práctico y colaborativo. En los que también he cultivado habilidades
                    interpersonales como la comunicación efectiva, la escucha activa y la
                    adaptabilidad, que considero fundamentales para el éxito en este entorno.
                </div>
                <div class=""> {/*  bg-slate-500 */}
                    <div class="flex flex-wrap gap-3">
                        <Badge Text={"C"} > </Badge>
                        <Badge Text={"C++"} > </Badge>
                        <Badge Text={"C#"} > </Badge>
                        <Badge Text={"HTML"} > </Badge>
                        <Badge Text={"Java"} > </Badge>
                        <Badge Text={"JavaScript"} > </Badge>
                        <Badge Text={"Python"}> </Badge>
                        <Badge Text={"SQL"}> </Badge>

                        {/* <Badge Text={"C"} Icon={IoMdPerson}> </Badge>
                            <Badge Text={"C++"} Icon={IoMdPerson}> </Badge>
                            <Badge Text={"C#"} Icon={IoMdPerson}> </Badge>
                            <Badge Text={"HTML"} Icon={IoMdPerson}> </Badge>
                            <Badge Text={"Java"} Icon={IoMdPerson}> </Badge>
                            <Badge Text={"JavaScript"} Icon={IoMdPerson}> </Badge>
                            <Badge Text={"Python"} Icon={IoMdPerson}> </Badge>    */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableInfo;

