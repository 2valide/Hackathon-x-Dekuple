// pages/index.js

import CombinedChart from "@/app/components/Graphique/Chart";

const IndexPage = () => {
  // Données fictives pour le premier graphique (barres)
  const barChartData = {
    labels: ["Capteur 1", "Capteur 2", "Capteur 3", "Capteur 4", "Capteur 5"],
    datasets: [
      {
        label: "Données IoT",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: [12, 19, 3, 5, 2], // Valeurs fictives
      },
    ],
  };

  // Données fictives pour le deuxième graphique (pyramide des âges)
  const pyramidMaleData = [100, 150, 200, 250, 300]; // Exemple de données pour les hommes
  const pyramidFemaleData = [120, 180, 220, 260, 320]; // Exemple de données pour les femmes
  const pyramidChartData = {
    labels: Array.from({ length: pyramidMaleData.length }, (_, i) => i + 1),
    datasets: [
      {
        label: "Hommes",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        data: pyramidMaleData,
      },
      {
        label: "Femmes",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: pyramidFemaleData.map((val) => -val), // Valeurs négatives pour inverser le côté gauche
      },
    ],
  };

  return (
    <div>
      <h1>Graphiques combinés</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "45%" }}>
          <h2>Graphique à barres</h2>
          <CombinedChart type="bar" data={barChartData} />
        </div>
        <div style={{ width: "45%" }}>
          <h2>Pyramide des âges</h2>
          <CombinedChart type="horizontalBar" data={pyramidChartData} />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
