document.addEventListener('DOMContentLoaded', () => {
  const ctx = (id) => document.getElementById(id).getContext('2d');

  const charts = {
    dailyTraffic: new Chart(ctx('dailyTrafficChart'), {
      type: 'line',
      data: {
        labels: ['06 abr', '13 abr', '20 abr', '27 abr', '04 may', '11 may'],
        datasets: [{
          label: 'Daily Traffic',
          data: [3500, 2800, 3200, 2500, 3800, 3000],
          borderColor: '#22C3C1',
          backgroundColor: 'rgba(34,195,193,0.2)',
          tension: 0.3,
          fill: true,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { mode: 'index', intersect: false }
        },
        scales: {
          x: { grid: { display: false } },
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(0, 0, 0, 0.05)' },
            ticks: { callback: v => v / 1000 + 'K' }
          }
        }
      }
    }),

    dailyPurchasesRevenue: new Chart(ctx('dailyPurchasesRevenueChart'), {
      type: 'line',
      data: {
        labels: ['06 abr', '13 abr', '20 abr', '27 abr', '04 may', '11 may'],
        datasets: [
          {
            label: 'Purchases',
            data: [70, 65, 80, 55, 90, 75],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.4,
            fill: true,
            pointRadius: 0,
            yAxisID: 'y'
          },
          {
            label: 'Revenue',
            data: [60, 50, 70, 45, 80, 65],
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            tension: 0.4,
            fill: true,
            pointRadius: 0,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'start',
            labels: {
              boxWidth: 10,
              font: { size: 10 },
              padding: 15,
              usePointStyle: true
            }
          },
          tooltip: { mode: 'index', intersect: false }
        },
        scales: {
          x: { grid: { display: false } },
          y: {
            beginAtZero: true,
            position: 'left',
            grid: { color: 'rgba(0,0,0,0.05)' },
            ticks: { callback: v => v + 'K' }
          },
          y1: {
            beginAtZero: true,
            position: 'right',
            grid: { drawOnChartArea: false },
            ticks: { callback: v => v + '€' }
          }
        }
      }
    }),

    weeklyTraffic: new Chart(ctx('weeklyTrafficChart'), {
      type: 'line',
      data: {
        labels: ['dic 2024', 'ene 2025', 'feb 2025', 'mar 2025', 'abr 2025', 'may 2025'],
        datasets: [{
          label: 'Weekly Traffic',
          data: [550, 480, 620, 500, 700, 650],
          borderColor: '#FFB85C',
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          tension: 0.3,
          fill: true,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { mode: 'index', intersect: false }
        },
        scales: {
          x: { grid: { display: false } },
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(0, 0, 0, 0.05)' }
          }
        }
      }
    }),

    dailyTrafficChannels: new Chart(ctx('dailyTrafficChannelsChart'), {
      type: 'line',
      data: {
        labels: ['06 abr', '13 abr', '20 abr', '27 abr', '04 may', '11 may'],
        datasets: [
          {
            label: 'Direct',
            data: [800, 750, 900, 700, 1000, 850],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            fill: true,
            stack: 'channels',
            pointRadius: 0
          },
          {
            label: 'Display',
            data: [200, 250, 300, 220, 280, 260],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: true,
            stack: 'channels',
            pointRadius: 0
          },
          {
            label: 'Email',
            data: [150, 180, 160, 190, 200, 170],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: true,
            stack: 'channels',
            pointRadius: 0
          },
          {
            label: 'Organic Search',
            data: [1500, 1400, 1700, 1300, 1800, 1600],
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            borderColor: 'rgba(153, 102, 255, 1)',
            fill: true,
            stack: 'channels',
            pointRadius: 0
          },
          {
            label: 'Paid Search',
            data: [400, 350, 450, 380, 500, 420],
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            borderColor: 'rgba(255, 206, 86, 1)',
            fill: true,
            stack: 'channels',
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'start',
            labels: {
              boxWidth: 10,
              font: { size: 10 },
              padding: 10
            }
          },
          tooltip: { mode: 'index', intersect: false }
        },
        scales: {
          x: { grid: { display: false }, stacked: true },
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(0, 0, 0, 0.05)' },
            stacked: true,
            ticks: { callback: v => v / 1000 + ' mil' }
          }
        }
      }
    }),

    monthlyTraffic: new Chart(ctx('monthlyTrafficChart'), {
      type: 'bar',
      data: {
        labels: ['jul 2024','ago 2024','sep 2024','oct 2024','nov 2024','dic 2024','ene 2025','feb 2025','mar 2025','abr 2025','may 2025','jun 2025'],
        datasets: [{
          label: 'Monthly Traffic',
          data: [180000,200000,190000,220000,210000,230000,250000,240000,260000,270000,280000,290000],
          backgroundColor: '#007AFF',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { mode: 'index', intersect: false }
        },
        scales: {
          x: { grid: { display: false } },
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(0, 0, 0, 0.05)' },
            ticks: { callback: v => v / 1000 + 'K' }
          }
        }
      }
    })
  };

  const originalData = Object.entries(charts).reduce((acc, [key, chart]) => {
    acc[key] = {
      labels: [...chart.data.labels],
      datasets: chart.data.datasets.map(ds => ({ ...ds }))
    };
    return acc;
  }, {});

  const startDateInput = document.getElementById('start-date');
  const endDateInput = document.getElementById('end-date');

  const filterByDate = (origLabels, origDatasets, start, end) => {
    const monthMap = { ene:0, feb:1, mar:2, abr:3, may:4, jun:5, jul:6, ago:7, sep:8, oct:9, nov:10, dic:11 };

    const parsed = origLabels.map(lbl => {
      const parts = lbl.split(' ');

      if (parts.length === 2 && parts[0].length === 3) {
        const [mon, year] = parts;
        return new Date(parseInt(year, 10), monthMap[mon], 1);
      } else if (parts.length === 2) {
        const [day, mon] = parts;
        return new Date(2025, monthMap[mon], parseInt(day, 10));
      } else {
        return new Date('Invalid');
      }
    });

    const idxs = parsed
      .map((d, i) => (d >= start && d <= end ? i : null))
      .filter(i => i !== null);

    const labels = idxs.map(i => origLabels[i]);
    const datasets = origDatasets.map(ds => ({ ...ds, data: idxs.map(i => ds.data[i]) }));

    return { labels, datasets };
  };

  const updateChart = (chart, orig) => {
    const start = new Date(startDateInput.value);
    const end = new Date(endDateInput.value);
    const { labels, datasets } = filterByDate(orig.labels, orig.datasets, start, end);
    chart.data.labels = labels;
    chart.data.datasets = datasets;
    chart.update();
  };

  const updateAllCharts = () => {
    Object.entries(charts).forEach(([key, chart]) => updateChart(chart, originalData[key]));
  };

  startDateInput.addEventListener('change', updateAllCharts);
  endDateInput.addEventListener('change', updateAllCharts);

  updateAllCharts();
});
