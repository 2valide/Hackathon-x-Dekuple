import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const CombinedCharts2 = ({ data }) => {
  const chartContainers = {
    lineChart: useRef(null),
    barChart: useRef(null),
    doughnutChart: useRef(null),
    radarChart: useRef(null),
  };

  useEffect(() => {
    if (
      chartContainers.lineChart.current &&
      chartContainers.barChart.current &&
      chartContainers.doughnutChart.current &&
      chartContainers.radarChart.current
    ) {
      const lineCtx = chartContainers.lineChart.current.getContext("2d");
      const barCtx = chartContainers.barChart.current.getContext("2d");
      const doughnutCtx = chartContainers.doughnutChart.current.getContext(
        "2d"
      );
      const radarCtx = chartContainers.radarChart.current.getContext("2d");

      // Détruire les graphiques précédents s'ils existent
      Chart.getChart(lineCtx)?.destroy();
      Chart.getChart(barCtx)?.destroy();
      Chart.getChart(doughnutCtx)?.destroy();
      Chart.getChart(radarCtx)?.destroy();

      // Graphique en ligne
      new Chart(lineCtx, {
        type: "line",
        data: data.lineChartData,
      });

      // Diagramme en bâtons
      new Chart(barCtx, {
        type: "bar",
        data: data.barChartData,
      });

      // Diagramme circulaire
      new Chart(doughnutCtx, {
        type: "doughnut",
        data: data.doughnutChartData,
      });

      // Graphique radar
      new Chart(radarCtx, {
        type: "radar",
        data: data.radarChartData,
      });
    }
  }, [data]);

  return (
    <div className="flex ">
      <div className="bg-[#35264A] rounded-lg border border-gray-300 p-4 m-4">
          <div className="flex flex-row">
              <div className="bg-gray-200 rounded-lg border border-gray-300 p-4 m-4">
                <canvas ref={chartContainers.lineChart} />
              </div>
              <div className="bg-gray-200 rounded-lg border border-gray-300 p-4 m-4">
                <canvas ref={chartContainers.barChart} />
              </div>
            </div >
            <div className="flex flex-row">
              <div className="bg-gray-200 rounded-lg border border-gray-300 p-4 m-4">
                <canvas ref={chartContainers.doughnutChart} />
              </div>
              <div className="bg-gray-200 rounded-lg border border-gray-300 p-4 m-4">
                <canvas ref={chartContainers.radarChart} />
              </div>
          </div>
      </div>


    </div>
  );
};

export default CombinedCharts2;
