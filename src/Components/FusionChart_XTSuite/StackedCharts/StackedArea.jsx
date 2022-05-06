import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Yearly Energy Production",
    numbersuffix: " TWh",
    formatnumberscale: "0",
    showvalues: "0",
    drawcrossline: "1",
    showsum: "1",
    plottooltext: "$dataValue from $seriesName",
    theme: "fusion",
  },
  categories: [
    {
      category: [
        {
          label: "Canada",
        },
        {
          label: "China",
        },
        {
          label: "Russia",
        },
        {
          label: "Australia",
        },
        {
          label: "United States",
        },
        {
          label: "France",
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: "Coal",
      data: [
        {
          value: "400",
        },
        {
          value: "830",
        },
        {
          value: "500",
        },
        {
          value: "420",
        },
        {
          value: "790",
        },
        {
          value: "380",
        },
      ],
    },
    {
      seriesname: "Hydro",
      data: [
        {
          value: "350",
        },
        {
          value: "620",
        },
        {
          value: "410",
        },
        {
          value: "370",
        },
        {
          value: "720",
        },
        {
          value: "310",
        },
      ],
    },
    {
      seriesname: "Nuclear",
      data: [
        {
          value: "210",
        },
        {
          value: "400",
        },
        {
          value: "450",
        },
        {
          value: "180",
        },
        {
          value: "570",
        },
        {
          value: "270",
        },
      ],
    },
    {
      seriesname: "Gas",
      data: [
        {
          value: "180",
        },
        {
          value: "330",
        },
        {
          value: "230",
        },
        {
          value: "160",
        },
        {
          value: "440",
        },
        {
          value: "350",
        },
      ],
    },
    {
      seriesname: "Oil",
      data: [
        {
          value: "60",
        },
        {
          value: "200",
        },
        {
          value: "200",
        },
        {
          value: "50",
        },
        {
          value: "230",
        },
        {
          value: "150",
        },
      ],
    },
  ],
};

class StackedAreaChart extends React.Component {
  render() {
    return (
      <>
        <h1>Stacked Area Chart</h1>
        <ReactFusioncharts
          type="stackedarea2d"
          width="600"
          height="400"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </>
    );
  }
}

export default StackedAreaChart;
