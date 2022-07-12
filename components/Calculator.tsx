import React from "react";
import CalculateButton from "./CalculateButton";

type Props = {};

function Calculator({}: Props) {
  return (
    <div className="w-[400px] border-black bg-black p-2">
      <div className=" flex flex-col h-[80px] justify-center">
        <h1 className="text-orange-300 text-right text-2xl transition-all">10</h1>
        <h1 className="text-white  text-right text-3xl transition-all">0</h1>
      </div>
      <div className="grid grid-cols-4 grid-flow-row mt-2">
        <CalculateButton type="clear" display="AC" />
        <CalculateButton type="oparator" display="/" />
        <CalculateButton type="oparator" display="x" />
        <CalculateButton type="number" display="7" />
        <CalculateButton type="number" display="8" />
        <CalculateButton type="number" display="9" />
        <CalculateButton type="oparator" display="-" />
        <CalculateButton type="number" display="4" />
        <CalculateButton type="number" display="5" />
        <CalculateButton type="number" display="6" />
        <CalculateButton type="oparator" display="+" />
        <CalculateButton type="number" display="1" />
        <CalculateButton type="number" display="2" />
        <CalculateButton type="number" display="3" />
        <CalculateButton type="equal" display="=" />
        <CalculateButton type="number" display="0" />
        <CalculateButton type="number" display="." />
      </div>
    </div>
  );
}

export default Calculator;
