

{/* <span class="grid bg-black text-white rounded-full p-2 justify-items-center "> 
      <div class="flex-grow p-">
        {text}
      </div>
    </span> */}

function Badge({ Text, Icon }) {
  const buttonStyling = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-indigo-600 to-pink-500
  text-gray-100 rounded-sm ring-2 ring-purple-400 px-6 py-2 
  hover:bg-white  hover:text-white hover:ring-slate-300 mx-8 shadow-lg shadow-indigo-300/50`;
  /* bg-gradient-to-r from-indigo-600 to-pink-500 font-semibold text-gray-100 ring-2 ring-purple-400 hover:bg-white hover:text-white hover:ring-slate-300 shadow-lg shadow-indigo-300/50 */
  return (
    <div class="grid grid-flow-col justify-items-center items-center max-w-fit min-w-fit px-3 py-1 rounded-full   bg-gradient-to-r from-slate-700  to-slate-600   font-semibold text-slate-200 hover:bg-white hover:text-slate-100 hover:ring-slate-100  ring-1 ring-teal-100 shadow-lg hover:shadow-slate-300/25 shadow-teal-300/15 "> {/* bg-zinc-700 text-white */}
    {/* <* class="grid grid-flow-col justify-items-center items-center max-w-fit min-w-fit px-3 py-1 rounded-full   bg-gradient-to-r from-indigo-600 to-pink-500 font-semibold text-gray-100 ring-2 ring-purple-400 hover:bg-white hover:text-white hover:ring-slate-300 shadow-lg shadow-indigo-300/50  ">*/}
      {Icon && <Icon clas class="w-4 h-4 mr-2" />}
      <div class="text-base">{Text}</div> {/* bg-slate-300 */}
    </div>
  );
}

export default Badge;