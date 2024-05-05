// components/CombinedCharts3.js

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const CombinedCharts3 = ({ data }) => {
  const chartContainers = {
    bubbleChart: useRef(null),
    doughnutChart: useRef(null),
    pieChart: useRef(null),
    scatterChart: useRef(null),
  };

  useEffect(() => {
    if (
      chartContainers.bubbleChart.current &&
      chartContainers.doughnutChart.current &&
      chartContainers.pieChart.current &&
      chartContainers.scatterChart.current
    ) {
      const bubbleCtx = chartContainers.bubbleChart.current.getContext("2d");
      const doughnutCtx = chartContainers.doughnutChart.current.getContext(
        "2d"
      );
      const pieCtx = chartContainers.pieChart.current.getContext("2d");
      const scatterCtx = chartContainers.scatterChart.current.getContext("2d");

      // Détruire les graphiques précédents s'ils existent
      Chart.getChart(bubbleCtx)?.destroy();
      Chart.getChart(doughnutCtx)?.destroy();
      Chart.getChart(pieCtx)?.destroy();
      Chart.getChart(scatterCtx)?.destroy();

      // Graphique à bulles
      new Chart(bubbleCtx, {
        type: "bubble",
        data: data.bubbleChartData,
      });

      // Graphique en anneau
      new Chart(doughnutCtx, {
        type: "doughnut",
        data: data.doughnutChartData,
      });

      // Graphique en secteurs
      new Chart(pieCtx, {
        type: "pie",
        data: data.pieChartData,
      });

      // Nuages de points
      new Chart(scatterCtx, {
        type: "scatter",
        data: data.scatterChartData,
        options: {
          scales: {
            x: {
              type: "linear",
              position: "bottom",
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [data]);

  return (

    <div className="flex">
      <div className="bg-[#35264A] rounded-lg border border-gray-300 p-4 m-4">
        <div className="flex flex-row">
          <div className="bg-gray-200 rounded-lg border border-gray-300 p-4 m-4">
            <canvas ref={chartContainers.bubbleChart} />
          </div>
          <div className="bg-gray-200 rounded-lg border border-gray-300 p-4 m-4">
          <canvas ref={chartContainers.scatterChart} />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="bg-gray-200 rounded-lg border border-gray-300 p-4 m-4">
            <canvas ref={chartContainers.pieChart} />
          </div>
          <div className="bg-gray-200 rounded-lg border border-gray-300 p-4 m-4">
            
            <canvas ref={chartContainers.doughnutChart} />
          </div>
        </div>
      </div>
    </div>
  );
};


export default CombinedCharts3;

//eazeass