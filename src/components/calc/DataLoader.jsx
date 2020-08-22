import React from "react";
import { CalcHelper } from "./CalcHelper";
import { useSelector } from "react-redux";

export const DataLoader = ({ children }) => {
  const { activeDeposit } = useSelector((state) => state.reducerData);
  const { valueDeposit, timeDeposit, profit } = useSelector(
    (state) => state.reducerCalc
  );
  return activeDeposit ? (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          activeDeposit,
          valueDeposit,
          timeDeposit,
          profit,
        })
      )}
    </>
  ) : (
    <CalcHelper />
  );
};
