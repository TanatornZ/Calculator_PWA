import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CalculateButton from "./CalculateButton";

type Props = {};

interface State {
  mainDisplay: string;
  subDisplay: string;
  limit?: boolean;
}
function Calculator({}: Props) {
  const [showDisplay, setShowDisplay] = useState("");

  const mainDisplay = useSelector((state: State) => state.mainDisplay);
  const subDisplay = useSelector((state: State) => state.subDisplay);
  const limit = useSelector((state: State) => state.limit);

  function numberWithCommas(x: string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="min-w-[330px]  border-black bg-black p-2">
      <div className=" flex flex-col h-[80px] justify-center">
        <h1
          className="text-orange-300 text-right text-2xl transition-all"
          id="sub-display"
        >
          {subDisplay}
        </h1>
        <h1
          className="text-white  text-right text-3xl transition-all"
          id="main-display"
        >
          {limit ? "Digit limit " : numberWithCommas(mainDisplay)}
        </h1>
      </div>
      <div className="grid grid-cols-4 grid-flow-row mt-2 ">
        <CalculateButton type="clear" display="AC" id="clear" />
        <CalculateButton type="oparator" display="/" id="divide" />
        <CalculateButton type="oparator" display="x" id="multiply" />
        <CalculateButton type="number" display="7" id="seven" />
        <CalculateButton type="number" display="8" id="eight" />
        <CalculateButton type="number" display="9" id="nine" />
        <CalculateButton type="oparator" display="-" id="subtract" />
        <CalculateButton type="number" display="4" id="four" />
        <CalculateButton type="number" display="5" id="five" />
        <CalculateButton type="number" display="6" id="six" />
        <CalculateButton type="oparator" display="+" id="add" />
        <CalculateButton type="number" display="1" id="one" />
        <CalculateButton type="number" display="2" id="two" />
        <CalculateButton type="number" display="3" id="three" />
        <CalculateButton type="equal" display="=" id="equals" />
        <CalculateButton type="number" display="0" id="zero" />
        <CalculateButton type="number" display="." id="decimal" />
      </div>
    </div>
  );
}

export default Calculator;
