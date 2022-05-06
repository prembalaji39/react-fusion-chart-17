import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Sales of Beer & Ice cream vs Temperature",
    subcaption: "Los Angeles Topanga",
    xaxisname: "Avg Day Temperature",
    yaxisname: "Sales (In USD)",
    xaxisminvalue: "23",
    xaxismaxvalue: "95",
    ynumberprefix: "$",
    yaxisminvalue: "1200",
    xnumbersuffix: "°F",
    theme: "fusion",
    plottooltext:
      "<b>$yDataValue</b> worth <b>$seriesNames</b> were sold,<br>when temperature was <b>$xdataValue</b>",
  },
  categories: [
    {
      category: [
        {
          x: "23",
          label: "23°F",
        },
        {
          x: "32",
          label: "32°F",
        },
        {
          x: "50",
          label: "50°F",
        },
        {
          x: "68",
          label: "68°F",
        },
        {
          x: "80",
          label: "80°F",
        },
        {
          x: "95",
          label: "95°F",
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: "Ice Cream",
      anchorbgcolor: "5D62B5",
      data: [
        {
          x: "23",
          y: "1560",
        },
        {
          x: "24",
          y: "1500",
        },
        {
          x: "24",
          y: "1680",
        },
        {
          x: "25",
          y: "1780",
        },
        {
          x: "25",
          y: "1620",
        },
        {
          x: "26",
          y: "1810",
        },
        {
          x: "27",
          y: "2310",
        },
        {
          x: "29",
          y: "2620",
        },
        {
          x: "31",
          y: "2500",
        },
        {
          x: "32",
          y: "2410",
        },
        {
          x: "35",
          y: "2880",
        },
        {
          x: "36",
          y: "3910",
        },
        {
          x: "34",
          y: "3960",
        },
        {
          x: "38",
          y: "4080",
        },
        {
          x: "40",
          y: "4190",
        },
        {
          x: "41",
          y: "4170",
        },
        {
          x: "42",
          y: "4280",
        },
        {
          x: "54",
          y: "5180",
        },
        {
          x: "53",
          y: "5770",
        },
        {
          x: "55",
          y: "5900",
        },
        {
          x: "56",
          y: "5940",
        },
        {
          x: "58",
          y: "6090",
        },
        {
          x: "61",
          y: "6086",
        },
        {
          x: "67",
          y: "6100",
        },
        {
          x: "68",
          y: "6200",
        },
        {
          x: "70",
          y: "6360",
        },
        {
          x: "75",
          y: "6450",
        },
        {
          x: "79",
          y: "6650",
        },
        {
          x: "80",
          y: "6710",
        },
        {
          x: "79",
          y: "6975",
        },
        {
          x: "82",
          y: "7000",
        },
        {
          x: "85",
          y: "7150",
        },
        {
          x: "86",
          y: "7160",
        },
        {
          x: "86",
          y: "7200",
        },
        {
          x: "88",
          y: "7230",
        },
        {
          x: "87",
          y: "7210",
        },
        {
          x: "86",
          y: "7480",
        },
        {
          x: "89",
          y: "7540",
        },
        {
          x: "89",
          y: "7400",
        },
        {
          x: "90",
          y: "7500",
        },
        {
          x: "92",
          y: "7640",
        },
      ],
    },
    {
      seriesname: "Beer",
      anchorbgcolor: "#29C3BE",
      data: [
        {
          x: "23",
          y: "3160",
        },
        {
          x: "24",
          y: "3000",
        },
        {
          x: "24",
          y: "3080",
        },
        {
          x: "25",
          y: "3680",
        },
        {
          x: "25",
          y: "3320",
        },
        {
          x: "26",
          y: "3810",
        },
        {
          x: "27",
          y: "5310",
        },
        {
          x: "29",
          y: "3620",
        },
        {
          x: "31",
          y: "4100",
        },
        {
          x: "32",
          y: "3910",
        },
        {
          x: "35",
          y: "4280",
        },
        {
          x: "36",
          y: "4210",
        },
        {
          x: "34",
          y: "4160",
        },
        {
          x: "38",
          y: "4480",
        },
        {
          x: "40",
          y: "4890",
        },
        {
          x: "41",
          y: "4770",
        },
        {
          x: "42",
          y: "4880",
        },
        {
          x: "54",
          y: "4980",
        },
        {
          x: "53",
          y: "4770",
        },
        {
          x: "55",
          y: "4900",
        },
        {
          x: "56",
          y: "4940",
        },
        {
          x: "58",
          y: "4990",
        },
        {
          x: "61",
          y: "5086",
        },
        {
          x: "67",
          y: "5100",
        },
        {
          x: "68",
          y: "4700",
        },
        {
          x: "70",
          y: "5360",
        },
        {
          x: "75",
          y: "5150",
        },
        {
          x: "79",
          y: "5450",
        },
        {
          x: "80",
          y: "5010",
        },
        {
          x: "79",
          y: "4975",
        },
        {
          x: "82",
          y: "5400",
        },
        {
          x: "85",
          y: "5150",
        },
        {
          x: "86",
          y: "5460",
        },
        {
          x: "86",
          y: "5000",
        },
        {
          x: "88",
          y: "5200",
        },
        {
          x: "87",
          y: "5410",
        },
        {
          x: "86",
          y: "5480",
        },
        {
          x: "89",
          y: "5440",
        },
        {
          x: "89",
          y: "5300",
        },
        {
          x: "90",
          y: "5500",
        },
        {
          x: "92",
          y: "5240",
        },
      ],
    },
  ],
};

class ScatterWithMultipleSeries extends React.Component {
  render() {
    return (
      <>
        <h1>Scatter With Multiple Series</h1>
        <ReactFusioncharts
          type="scatter"
          width="600"
          height="400"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </>
    );
  }
}

export default ScatterWithMultipleSeries;
