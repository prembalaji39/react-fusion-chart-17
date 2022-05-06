import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Twitter Mentions",
    yaxisname: "Number of mentions",
    numbersuffix: "M",
    subcaption: "(iPhone Vs Samsung)",
    yaxismaxvalue: "2",
    plottooltext:
      "$seriesName was mentioned <b>$dataValue</b> times on Twitter in $label",
    theme: "fusion",
  },
  categories: [
    {
      category: [
        {
          label: "2007",
        },
        {
          label: "2008",
        },
        {
          label: "2009",
        },
        {
          label: "2010",
        },
        {
          label: "2011",
        },
        {
          label: "2012",
        },
        {
          label: "2013",
        },
        {
          label: "2014",
        },
        {
          label: "2015",
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: "iPhone",
      data: [
        {
          value: "1.90",
        },
        {
          value: "1.94",
        },
        {
          value: "1.69",
        },
        {
          value: "1.66",
        },
        {
          value: "1.43",
        },
        {
          value: "1.97",
        },
        {
          value: "1.78",
        },
        {
          value: "1.58",
        },
        {
          value: "1.55",
        },
      ],
    },
    {
      seriesname: "Samsung",
      data: [
        {
          value: "0.68",
        },
        {
          value: "0.74",
        },
        {
          value: "0.25",
        },
        {
          value: "0.64",
        },
        {
          value: "0.22",
        },
        {
          value: "0.74",
        },
        {
          value: "0.58",
        },
        {
          value: "0.15",
        },
        {
          value: "0.26",
        },
      ],
    },
  ],
};

class SplineAreaWithMultipleSeries extends React.Component {
  render() {
    return (
      <>
        <h1>Spline Area With Multiple Series</h1>
        <ReactFusioncharts
          type="mssplinearea"
          width="600"
          height="400"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </>
    );
  }
}

export default SplineAreaWithMultipleSeries;
