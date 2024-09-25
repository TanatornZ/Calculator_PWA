import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CalculateButton from "./CalculateButton";
import { calculateState } from "../store";

function Calculator() {
  const mainDisplay = useSelector((state: calculateState) => state.mainDisplay);
  const subDisplay = useSelector((state: calculateState) => state.subDisplay);
  const error = useSelector((state: calculateState) => state.error);
  const errorMessage = useSelector(
    (state: calculateState) => state.errorMessage
  );

  function numberWithCommas(x: string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="border-black bg-black p-3 rounded-xl flex flex-col gap-3 max-w-md w-full">
      <div className="flex flex-col h-[120px] justify-center bg-white text-black font-mono p-3 rounded-lg">
        <h1
          className="text-orange-300 text-right text-xl transition-all"
          id="sub-display"
        >
          {!error && numberWithCommas(subDisplay)}
        </h1>
        <h1
          className={`text-right text-3xl transition-all ${
            error && "!text-center"
          }`}
          id="main-display"
        >
          {error ? (
            <span className="text-red-700 text-xl !text-center">
              {errorMessage}
            </span>
          ) : (
            numberWithCommas(mainDisplay)
          )}
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-1 md:gap-2 grid-flow-row mt-2 ">
        <CalculateButton type="clear" display="AC" id="clear" />
        <CalculateButton type="operator" display="/" id="divide" />
        <CalculateButton type="operator" display="x" id="multiply" />
        <CalculateButton type="number" display="7" id="seven" />
        <CalculateButton type="number" display="8" id="eight" />
        <CalculateButton type="number" display="9" id="nine" />
        <CalculateButton type="operator" display="-" id="subtract" />
        <CalculateButton type="number" display="4" id="four" />
        <CalculateButton type="number" display="5" id="five" />
        <CalculateButton type="number" display="6" id="six" />
        <CalculateButton type="operator" display="+" id="add" />
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
