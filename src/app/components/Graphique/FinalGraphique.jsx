import CombinedCharts from "@/app/components/Graphique/Chart";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Graphique = () => {
  // Fonction pour générer des données aléatoires pour le graphique de type "pyramid"
  const generateRandomPyramidData = () => {
    const labels = ["0-10", "11-20", "21-30", "31-40", "41-50"];
    const datasets = [
      {
        label: "Hommes",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        data: labels.map(() => getRandomInt(50, 350)),
      },
      {
        label: "Femmes",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: labels.map(() => getRandomInt(50, 350)),
      },
    ];
    return { labels, datasets };
  };

  // Fonction pour générer des données aléatoires pour le graphique de type "bar"
  const generateRandomBarChartData = () => {
    const labels = ["A", "B", "C", "D", "E"];
    const datasets = [
      {
        label: "Données",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        data: labels.map(() => getRandomInt(10, 50)),
      },
    ];
    return { labels, datasets };
  };

  // Fonction pour générer des données aléatoires pour le graphique de type "pie"
  const generateRandomPieChartData = () => {
    const labels = ["A", "B", "C", "D", "E"];
    const datasets = [
      {
        label: "Données",
        backgroundColor: ["red", "green", "blue", "yellow", "orange"],
        data: labels.map(() => getRandomInt(10, 50)),
      },
    ];
    return { labels, datasets };
  };

  // Fonction pour générer des données aléatoires pour le graphique de type "scatter"
  const generateRandomScatterChartData = () => {
    const datasets = [
      {
        label: "Nuages de points",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        data: Array.from({ length: 5 }, () => ({
          x: getRandomInt(1, 5),
          y: getRandomInt(10, 50),
        })),
      },
    ];
    return { datasets };
  };

  // Génération des données pour chaque type de graphique
  const pyramidData = generateRandomPyramidData();
  const barChartData = generateRandomBarChartData();
  const pieChartData = generateRandomPieChartData();
  const scatterChartData = generateRandomScatterChartData();

  // Assemblage des données dans un objet pour passer au composant CombinedCharts
  const data = {
    pyramidData,
    barChartData,
    pieChartData,
    scatterChartData,
  };

  return (
    <div className="">
      <CombinedCharts data={data} />
    </div>
  );
};

export default Graphique;
