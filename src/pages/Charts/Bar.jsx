import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from "../../data/dummy";
import { ChartsHeader } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      className="m-4 md:m-10 mt-24 p-10 bg-white 
    dark:bg-secondary-dark-bg rounded-3xl"
    >
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <ChartComponent
        id="line-chart"
        height="420px"
        primaryYAxis={barPrimaryYAxis}
        primaryXAxis={barPrimaryXAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        legendSettings={{ background: "white" }}
      >
        <Inject services={[Category, Tooltip, ColumnSeries, DataLabel, Legend]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
