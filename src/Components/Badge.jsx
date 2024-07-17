

{/* <span class="grid bg-black text-white rounded-full p-2 justify-items-center "> 
      <div class="flex-grow p-">
        {text}
      </div>
    </span> */}

function Badge({ Text, Icon }) {
  return (

    <span class="grid grid-flow-col justify-items-center bg-zinc-700 text-white rounded-full max-w-fit min-w-fit px-3 py-1 items-center">
      {Icon && <Icon class="w-4 h-4 mr-2" />}
      <div class="text-base">{Text}</div> {/* bg-slate-300 */}
    </span>

  );
}

export default Badge;