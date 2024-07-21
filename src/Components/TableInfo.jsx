import Badge from "./Badge.jsx";

function TableInfo({ tittle, date, description, lstTech }) {
    return (
        <div class="p-6 rounded-3xl pl-6 border-solid border-2 border-slate-300 bg-slate-200"> {/* pt-48 pl-6 bg-lime-300 */}
            <div class="grid auto-rows-auto md:grid-flow-col lg:grid-flow-col gap-6">
                <div class=" min-w-32 pt-1 md:row-span-3 lg:row-span-3 text-lef text-base">{date}</div> {/* bg-slate-200 */}
                <div class=" text-xl "><strong>{tittle}</strong> </div> {/* bg-slate-700 */}
                <div class=" text-base">{description}</div>
                <div class=""> {/*  bg-slate-500 */}
                    <div class="flex flex-wrap gap-2">
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