import React from "react";

const ToolTip1 = ({children, tooltipsText, position }) => {
  return (

    <div className="w-full ppx-4 sm:w-1/2 lg:w-1/4 bbg-red-300  ">
      <div className="mmb-14 bbg-red-200">
        <div className="group relative inline-block bbg-red-400">
          <button className="inline-flex rounded bg-primary ppx-[18px] ppy-2 text-base font-semibold text-white bbg-blue-500">
            {children}
          </button>
          <div
            className={` ${
              (position === "right" &&
                `absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded bg-slate-500 px-4 py-[7px] text-sm font-semibold text-white opacity-0 group-hover:opacity-100`) ||
              (position === "top" &&
                `absolute bottom-full left-1/2 z-20 mb-1 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-[3px] text-sm font-semibold text-white opacity-0 group-hover:opacity-100`) ||
              (position === "left" &&
                `absolute right-full top-1/2 z-20 mr-1 -translate-y-1/2 whitespace-nowrap rounded bg-black px-2 py-[3px] text-sm font-semibold text-white opacity-0 group-hover:opacity-100`) ||
              (position === "bottom" &&
                /* `absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 whitespace-nowrap rounded g-black bg-white bg-opacity-15  px-4 py-[6px] text-sm font-semibold text-white opacity-0 group-hover:opacity-100 `) */
                `absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 whitespace-nowrap rounded g-black bg-slate-500  px-2 py-[3px] text-sm font-semibold text-white opacity-0 group-hover:opacity-100 `)
            }`}
          >
            <span
              className={` ${
                (position === "right" &&
                  `absolute left-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-slate-500`) ||
                (position === "top" &&
                  `absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black`) ||
                (position === "left" &&
                  `absolute right-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-black`) ||
                (position === "bottom" &&
                  /* `absolute left-1/2 top-[-3px] z-40 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bbg-black bg-white bg-opacity-15    `) */
                  `absolute left-1/2 top-[-3px] z-40 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bbg-black bg-slate-500     `)
              } `}
            ></span>
            {tooltipsText}
          </div>
        </div>
      </div>
    </div>

  );
};

export default ToolTip1;

