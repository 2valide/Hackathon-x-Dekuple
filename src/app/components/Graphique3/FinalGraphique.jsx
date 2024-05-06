
import CombinedCharts3 from "../Graphique3/Chart";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Graphique3 = () => {
  // Données fictives pour les différents graphiques
  const generateRandomBubbleData = () => {
    const data = [];
    for (let i = 0; i < 3; i++) {
      data.push({ x: getRandomInt(1, 20), y: getRandomInt(1, 20), r: getRandomInt(5, 30) });
    }
    return data;
  };

  const bubbleChartData = {
    datasets: [
      {
        label: "Bubble Chart",
        data: generateRandomBubbleData(),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const doughnutChartData = {
    labels: ["Red", "Green", "Blue"],
    datasets: [
      {
        label: "Doughnut Chart",
        data: [getRandomInt(10, 50), getRandomInt(10, 50), getRandomInt(10, 50)],
        backgroundColor: ["red", "green", "blue"],
      },
    ],
  };

  const pieChartData = {
    labels: ["Man", "Kids", "Women"],
    datasets: [
      {
        label: "Pie Chart",
        data: [getRandomInt(10, 50), getRandomInt(10, 50), getRandomInt(10, 50)],
        backgroundColor: ["red", "green", "blue"],
      },
    ],
  };

  const generateRandomScatterData = () => {
    const data = [];
    for (let i = 0; i < 5; i++) {
      data.push({ x: getRandomInt(1, 5), y: getRandomInt(10, 50) });
    }
    return data;
  };

  const scatterChartData = {
    datasets: [
      {
        label: "Scatter Chart",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        data: generateRandomScatterData(),
      },
    ],
  };
  const data = {
    bubbleChartData: bubbleChartData,
    doughnutChartData: doughnutChartData,
    pieChartData: pieChartData,
    scatterChartData: scatterChartData,
  };

  return (
    <div className="">
      <CombinedCharts3 data={data} />
    </div>
  );
};

export default Graphique3;
