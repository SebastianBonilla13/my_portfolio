import Badge from "./Badge.jsx";

function TableInfo({ tittle, date, description, lstTech }) {
    return (
        <div class="p-6 rounded-3xl pl-6  ring-1 ring-white ring-opacity-20 bg-white bg-opacity-5 shadow-lg shadow-indigo-100/10 hover:shadow-indigo-100/25 "> {/* pt-48 pl-6 bg-lime-300 */} {/* bg-gradient-to-r from-slate-700  to-slate-800  */}
            <div class="grid auto-rows-auto md:grid-flow-col lg:grid-flow-col gap-6">
                <div class=" min-w-32 pt-1 md:row-span-3 lg:row-span-3 text-lef text-base">{date}</div> {/* bg-slate-200 */}
                <div class=" text-xl"><strong>{tittle}</strong> </div> {/* bg-slate-700 */}
                <div class=" text-base">{description}</div>
                <div class="">
                    <div class="flex flex-wrap gap-3">
                        {lstTech.map((technology) => ( // map renderizado dinámico
                            <Badge Text={technology} key={technology} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableInfo;