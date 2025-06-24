document.addEventListener('DOMContentLoaded', function() {
  // 1. Captura de contextos de cada <canvas>
  const dailyTrafficCtx           = document.getElementById('dailyTrafficChart').getContext('2d');
  const dailyPurchasesRevenueCtx  = document.getElementById('dailyPurchasesRevenueChart').getContext('2d');
  const weeklyTrafficCtx          = document.getElementById('weeklyTrafficChart').getContext('2d');
  const dailyTrafficChannelsCtx   = document.getElementById('dailyTrafficChannelsChart').getContext('2d');
  const monthlyTrafficCtx         = document.getElementById('monthlyTrafficChart').getContext('2d');

  // 2. Captura de los filtros del sidebar
  const startDateInput   = document.getElementById('start-date');
  const endDateInput     = document.getElementById('end-date');
  const channelSelect    = document.getElementById('session-channel');
  const deviceCheckboxes = document.querySelectorAll('input[name="device"]');

  // 3. Creación de los 5 charts (se guardan en constantes para poder actualizarlos)
  const dailyTrafficChart = new Chart(dailyTrafficCtx, {
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
          ticks: {
            callback: v => v / 1000 + 'K'
          }
        }
      }
    }
  });

  const dailyPurchasesRevenueChart = new Chart(dailyPurchasesRevenueCtx, {
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
        legend: { display: true, position: 'top', align: 'start', labels: { boxWidth: 10, font: { size: 10 }, padding: 15, usePointStyle: true } },
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
  });

  const weeklyTrafficChart = new Chart(weeklyTrafficCtx, {
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
          grid: { color: 'rgba(0, 0, 0, 0.05)' },
          ticks: { callback: v => v }
        }
      }
    }
  });

  const dailyTrafficChannelsChart = new Chart(dailyTrafficChannelsCtx, {
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
        legend: { display: true, position: 'top', align: 'start', labels: { boxWidth: 10, font: { size: 10 }, padding: 10 } },
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
  });

  const monthlyTrafficChart = new Chart(monthlyTrafficCtx, {
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
  });

  // 4. Guardar copias “inmutables” de etiquetas y datasets
  const originalDailyTrafficLabels        = [...dailyTrafficChart.data.labels];
  const originalDailyTrafficDatasets      = dailyTrafficChart.data.datasets.map(ds => ({ ...ds }));

  const originalPurchasesRevenueLabels    = [...dailyPurchasesRevenueChart.data.labels];
  const originalPurchasesRevenueDatasets  = dailyPurchasesRevenueChart.data.datasets.map(ds => ({ ...ds }));

  const originalWeeklyTrafficLabels       = [...weeklyTrafficChart.data.labels];
  const originalWeeklyTrafficDatasets     = weeklyTrafficChart.data.datasets.map(ds => ({ ...ds }));

  const originalTrafficChannelsLabels     = [...dailyTrafficChannelsChart.data.labels];
  const originalTrafficChannelsDatasets   = dailyTrafficChannelsChart.data.datasets.map(ds => ({ ...ds }));

  const originalMonthlyTrafficLabels      = [...monthlyTrafficChart.data.labels];
  const originalMonthlyTrafficDatasets    = monthlyTrafficChart.data.datasets.map(ds => ({ ...ds }));

  // 5. Helper: filtra un conjunto original por rango de fechas
  function filterByDate(origLabels, origDatasets, start, end) {
    const monthMap = { ene:0, feb:1, mar:2, abr:3, may:4, jun:5, jul:6, ago:7, sep:8, oct:9, nov:10, dic:11 };
    const parsed = origLabels.map(lbl => {
      const [day, mon] = lbl.split(' ');
      return new Date(2025, monthMap[mon], parseInt(day,10));
    });
    const idxs = parsed
      .map((d,i) => (d >= start && d <= end ? i : null))
      .filter(i => i !== null);
    const labels   = idxs.map(i => origLabels[i]);
    const datasets = origDatasets.map(ds => ({
      ...ds,
      data: idxs.map(i => ds.data[i])
    }));
    return { labels, datasets };
  }

  // 6. updateAllCharts: lee filtros y redibuja
  function updateAllCharts() {
    const startDate = new Date(startDateInput.value);
    const endDate   = new Date(endDateInput.value);
    const channel   = channelSelect.value;
    const devices   = Array.from(deviceCheckboxes)
                            .filter(chk => chk.checked)
                            .map(chk => chk.value);

    // Daily Traffic
    (() => {
      const { labels, datasets } = filterByDate(
        originalDailyTrafficLabels,
        originalDailyTrafficDatasets,
        startDate, endDate
      );
      dailyTrafficChart.data.labels    = labels;
      dailyTrafficChart.data.datasets  = datasets;
      dailyTrafficChart.update();
    })();

    // Purchases & Revenue
    (() => {
      const { labels, datasets } = filterByDate(
        originalPurchasesRevenueLabels,
        originalPurchasesRevenueDatasets,
        startDate, endDate
      );
      dailyPurchasesRevenueChart.data.labels   = labels;
      dailyPurchasesRevenueChart.data.datasets = datasets;
      dailyPurchasesRevenueChart.update();
    })();

    // Weekly Traffic
    (() => {
      const { labels, datasets } = filterByDate(
        originalWeeklyTrafficLabels,
        originalWeeklyTrafficDatasets,
        startDate, endDate
      );
      weeklyTrafficChart.data.labels   = labels;
      weeklyTrafficChart.data.datasets = datasets;
      weeklyTrafficChart.update();
    })();

    // Traffic by Channels
    (() => {
      const { labels, datasets } = filterByDate(
        originalTrafficChannelsLabels,
        originalTrafficChannelsDatasets,
        startDate, endDate
      );
      dailyTrafficChannelsChart.data.labels   = labels;
      dailyTrafficChannelsChart.data.datasets = datasets;
      dailyTrafficChannelsChart.update();
    })();

    // Monthly Traffic
    (() => {
      const { labels, datasets } = filterByDate(
        originalMonthlyTrafficLabels,
        originalMonthlyTrafficDatasets,
        startDate, endDate
      );
      monthlyTrafficChart.data.labels   = labels;
      monthlyTrafficChart.data.datasets = datasets;
      monthlyTrafficChart.update();
    })();
  }

  // 7. Enganchar eventos para disparar la actualización
  startDateInput.addEventListener('change', updateAllCharts);
  endDateInput.addEventListener('change',   updateAllCharts);
  channelSelect.addEventListener('change',  updateAllCharts);
  deviceCheckboxes.forEach(chk => chk.addEventListener('change', updateAllCharts));

  // (Opcional) Ejecutar una vez al inicio para sincronizar
  //updateAllCharts();
});
