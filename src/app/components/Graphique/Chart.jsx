import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const CombinedCharts = ({ data }) => {
  const chartContainers = {
    pyramidChart: useRef(null),
    barChart: useRef(null),
    pieChart: useRef(null),
    scatterChart: useRef(null),
  };

  useEffect(() => {
    if (
      chartContainers.pyramidChart.current &&
      chartContainers.barChart.current &&
      chartContainers.pieChart.current &&
      chartContainers.scatterChart.current
    ) {
      const pyramidCtx = chartContainers.pyramidChart.current.getContext("2d");
      const barCtx = chartContainers.barChart.current.getContext("2d");
      const pieCtx = chartContainers.pieChart.current.getContext("2d");
      const scatterCtx = chartContainers.scatterChart.current.getContext("2d");

      // Détruire les graphiques précédents s'ils existent
      Chart.getChart(pyramidCtx)?.destroy();
      Chart.getChart(barCtx)?.destroy();
      Chart.getChart(pieCtx)?.destroy();
      Chart.getChart(scatterCtx)?.destroy();

      // Pyramide des âges
      new Chart(pyramidCtx, {
        type: "bar",
        data: data.pyramidData,
        options: {
          indexAxis: "y",
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      // Diagramme en bâtons
      new Chart(barCtx, {
        type: "bar",
        data: data.barChartData,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      // Diagramme circulaire
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
    <div>
      <div className="flex flew-row w-[500px]">
        <canvas ref={chartContainers.pyramidChart} />
        <canvas ref={chartContainers.barChart} />
      </div>
      <div className="flex flew-row w-[500px] h-[500px]">
        <canvas ref={chartContainers.pieChart} />
        <canvas ref={chartContainers.scatterChart} />
      </div>
    </div>
  );
};

export default CombinedCharts;
