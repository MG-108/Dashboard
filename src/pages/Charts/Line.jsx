import React from "react";
import { ChartsHeader, LineChart } from "../../components";

const Line = () => {
  return (
    <div
      className="m-4 md:m-10 mt-24 p-10 bg-white 
    dark:bg-secondary-dark-bg rounded-3xl"
    >
      <ChartsHeader category="Line" title="Bitcoin Prices" />
      <div className="w-full rounded-3xl">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
