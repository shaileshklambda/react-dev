///////////////////////////////////////////// Default Theme /////////////////////////////////
const DefaultThemeChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ],
      borderWidth: 1,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
const DefaultThemeChartOptions = {
  scales: {
    xAxes: [
      {
        stacked: true
      }
    ],
    yAxes: [
      {
        stacked: true
      }
    ]
  }
};
///////////////////////////////////////////// Magic Leap Theme /////////////////////////////////
const MLchartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset",
      backgroundColor: "#05e7e6",
      borderColor: "#05e7e6",
      borderWidth: 1,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
const MLchartOptions = {
  scales: {
    xAxes: [
      {
        gridLines: { display: false },
        barPercentage: 0.4
      }
    ],
    yAxes: [{ gridLines: { display: true } }]
  }
};

const ChartWithGridLines = {
  scales: {
    xAxes: [
      {
        gridLines: { display: true },
        barPercentage: 0.4
      }
    ],
    yAxes: [{ gridLines: { display: true } }]
  }
};
const ChartWithOptions = {
  scales: {
    xAxes: [
      {
        gridLines: { display: true },
        barPercentage: 0.4
      }
    ],
    yAxes: [{ gridLines: { display: true } }]
  }
};

const DefaultTheme = {
  chartData: DefaultThemeChartData,
  chartOptions: DefaultThemeChartOptions
};
const MagicLeapTheme = {
  chartData: MLchartData,
  chartOptions: MLchartOptions
};
const WithGridLines = {
  chartData: MLchartData,
  chartOptions: ChartWithGridLines
};

export { DefaultTheme, MagicLeapTheme, WithGridLines };
