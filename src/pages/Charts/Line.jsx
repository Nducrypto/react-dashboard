import React from "react";
import {
  ChartComponent,
  DateTime,
  Legend,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../Components";

import { useStateContext } from "../../contexts/ContextProvider";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";

const Line = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-12 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header title="Inflation Rate" category="Charts" />
      <div className="w-full">
        <ChartComponent
          id="line-charts"
          height="420px"
          primaryXAxis={LinePrimaryXAxis}
          primaryYAxis={LinePrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject services={[DateTime, Legend, Tooltip, LineSeries]} />
          <SeriesCollectionDirective>
            {lineCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
        {/* <LineChart /> */}
      </div>
    </div>
  );
};

export default Line;
