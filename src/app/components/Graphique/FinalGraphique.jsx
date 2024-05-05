import CombinedCharts from "@/app/components/Graphique/Chart";

const Graphique = () => {
  // Données fictives pour les différents graphiques
  const pyramidData = {
    labels: ["0-10", "11-20", "21-30", "31-40", "41-50"],
    datasets: [
      {
        label: "Hommes",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        data: [100, 150, 200, 250, 300],
      },
      {
        label: "Femmes",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: [120, 180, 220, 260, 320],
      },
    ],
  };

  const barChartData = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        label: "Données",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        data: [10, 20, 30, 40, 50],
      },
    ],
  };

  const pieChartData = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        label: "Données",
        backgroundColor: ["red", "green", "blue", "yellow", "orange"],
        data: [10, 20, 30, 40, 50],
      },
    ],
  };

  const scatterChartData = {
    datasets: [
      {
        label: "Nuages de points",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        data: [
          { x: 1, y: 10 },
          { x: 2, y: 20 },
          { x: 3, y: 30 },
          { x: 4, y: 40 },
          { x: 5, y: 50 },
        ],
      },
    ],
  };

  const data = {
    pyramidData: pyramidData,
    barChartData: barChartData,
    pieChartData: pieChartData,
    scatterChartData: scatterChartData,
  };

  return (
    <div className="flex flex-row">
      <CombinedCharts data={data} />
    </div>
  );
};

export default Graphique;
