

function Card() {
    return (
        <div class="w-auto "> {/* pt-48 pl-6 */}
            <table class="table-auto border-4 ">  {/*  */}
                {/* <thead class="border-slate-400 border-4 ">
                    <tr class="">
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                    </tr>
                </thead> */}
                <tbody>
                    <tr >
                        <td class="border-2 w-32">2018 - Presente</td>
                        <td>Ingeniero de Sistemas - Universidad del Cauca</td>
                        {/* <td>1961</td> */}
                    </tr>
                    <tr class=" border-2 ">
                        {/* <td class="border-2 " >Witchy Woman</td> */} {/* border-slate-800 */}
                        <td>espaceee</td>
                        <td class="">
                            Estudiante de último semestre de Ingeniería de Sistemas 
                            en la Universidad del Cauca, donde he adquirido conocimientos 
                            sólidos en áreas como programación, análisis de sistemas y 
                            gestión de proyectos. Durante mi trayectoria académica he 
                            participado en diversos proyectos que me han permitido explorar 
                            y desarrollar habilidades en diferentes lenguajes de programación 
                            y tecnologías emergentes, aplicando mis conocimientos en un 
                            entorno práctico y colaborativo. En los que también he cultivado 
                            habilidades interpersonales como la comunicación efectiva, la 
                            escucha activa y la adaptabilidad, que considero fundamentales 
                            para el éxito en este entorno.
                        </td>
                    </tr>
                    <tr class=" border-2 ">
                        {/* <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td> */}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Card;

