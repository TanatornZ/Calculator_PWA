import React, { useEffect } from "react";

type Props = {
  type: string;
  display: string;
};

function CalculateButton({ type, display }: Props) {
  let color = "";
  let position = "";

  switch (type) {
    case "equal":
      color = "bg-equal";
      position = "row-span-3";
      break;
    case "clear":
      color = "bg-clear";
      position = "col-span-2";
      break;
    case "oparator":
      color = "bg-oparator";
      break;
    default:
      if (display === "0") {
        position = "col-span-2";
      }
      color = "bg-number";
  }

  return (
    <div
      className={`${color} ${position} border-black border  text-white hover:text-black hover:border-white  min-h-[80px] flex justify-center items-center cursor-pointer `} 
    >
      <h1 className="text-2xl ">{display}</h1>
    </div>
  );
}

export default CalculateButton;
