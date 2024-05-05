// pages/Graphique/index.js

import CombinedCharts2 from "../Graphique2/Chart";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Graphique = () => {
  // Données fictives pour les différents graphiques
  const generateRandomLineData = () => {
    const data = [];
    for (let i = 0; i < 6; i++) {
      data.push(getRandomInt(10, 100));
    }
    return data;
  };

  const generateRandomBarData = () => {
    const data = [];
    for (let i = 0; i < 5; i++) {
      data.push(getRandomInt(10, 100));
    }
    return data;
  };

  const generateRandomDoughnutData = () => {
    const data = [];
    for (let i = 0; i < 5; i++) {
      data.push(getRandomInt(10, 100));
    }
    return data;
  };

  const generateRandomRadarData = () => {
    const data = [];
    for (let i = 0; i < 6; i++) {
      data.push(getRandomInt(10, 100));
    }
    return data;
  };

  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        borderColor: "rgba(255, 99, 132, 1)",
        data: generateRandomLineData(),
      },
    ],
  };

  const barChartData = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        label: "Données",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        data: generateRandomBarData(),
      },
    ],
  };

  const doughnutChartData = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        label: "Données",
        backgroundColor: ["red", "green", "blue", "yellow", "orange"],
        data: generateRandomDoughnutData(),
      },
    ],
  };

  const radarChartData = {
    labels: ["A", "B", "C", "D", "E", "F"],
    datasets: [
      {
        label: "Données",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: generateRandomRadarData(),
      },
    ],
  };

  const data = {
    lineChartData: lineChartData,
    barChartData: barChartData,
    doughnutChartData: doughnutChartData,
    radarChartData: radarChartData,
  };

  return (
    <div className="">
      <CombinedCharts2 data={data} />
    </div>
  );
};

export default Graphique;



