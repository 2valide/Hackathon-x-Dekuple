// components/AgePyramidChart.js

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const AgePyramidChart = ({ maleData, femaleData }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');
      new Chart(ctx, {
        type: 'horizontalBar',
        data: {
          labels: Array.from({ length: maleData.length }, (_, i) => i + 1),
          datasets: [
            {
              label: 'Hommes',
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              data: maleData,
            },
            {
              label: 'Femmes',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              data: femaleData.map(val => -val), // Valeurs négatives pour inverser le côté gauche
            },
          ],
        },
        options: {
          indexAxis: 'y',
          scales: {
            x: {
              stacked: true,
              ticks: {
                callback: function (value) {
                  return Math.abs(value); // Convertir les valeurs négatives en positives
                }
              }
            },
            y: {
              stacked: true,
            },
          },
        },
      });
    }
  }, [maleData, femaleData]);

  return <canvas ref={chartContainer} />;
};

export default AgePyramidChart;
