// components/CombinedChart.js

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CombinedChart = ({ type, data }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');
      new Chart(ctx, {
        type: 'bar', // Utilisation de 'bar' pour les graphiques à barres horizontales
        data: data,
        options: {
          indexAxis: 'y', // Définit l'axe des indices sur l'axe Y pour rendre le graphique horizontal
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      });
    }
  }, [type, data]);

  return <canvas ref={chartContainer} />;
};

export default CombinedChart;
