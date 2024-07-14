/**
 * let start from empty page
 *
 */
import React from "react";

// step 1:
import * as AiReactIcons from "react-icons/ai"; // ai for Ant Design Icons
// do the same thingg for bootstrap icons.
import * as BsReactIcons from "react-icons/bs"; // bs for Bootstrap
import * as BiReactIcons from "react-icons/bi"; // bi for Box Icons

import * as Fa6ReactIcons from "react-icons/fa6";
import * as FaReactIcons from "react-icons/fa";
import * as IoReactIcons from "react-icons/io";

/* import { FaRegFolderOpen, FaSuitcase } from "react-icons/fa6";
import { FaSmileWink } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
 */

const DynamicReactIcons = ({iconNamee}) => {
  // step 2:

  /**
   *
   * @param {string} iconName
   * @returns
   */

  //   if you want to show icons from 2 different lib.
  // suppose from "Bootstrap" and "ant Design Icons" at same time

  const DisplayIcons = (iconName) => {
    // now here we have to check which icon is from "bootstrap" and which one is from "AI"

    if (iconName.startsWith("Fa6")) {
      return Fa6ReactIcons[iconName];
    }
    if (iconName.startsWith("Fa")) {
      return FaReactIcons[iconName];
    }
    if (iconName.startsWith("Io")) {
      return IoReactIcons[iconName];
    }
  };

  // assume we have an array which has names of icons.
  // now here in the array i will add some bootstrap icons

  const icons = [
    /* "AiFillApple",
    "AiFillAppstore",
    "AiFillBug",
    "BsFillAirplaneEnginesFill",
    "BiBeer", */

    "FaRegFolderOpen",
    "FaSuitcase",
    "FaSmileWink",
    "IoMdPerson"
    
  ];

  //    similarly you can do with all icons

  return (
    <div>
        {React.createElement(DisplayIcons(iconNamee))}
    </div>
  );
};

export default DynamicReactIcons;