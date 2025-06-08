document.addEventListener('DOMContentLoaded', function() {
    // 1. Gráfico: Recent Daily Traffic
    const dailyTrafficCtx = document.getElementById('dailyTrafficChart').getContext('2d');

    // 2. Gráfico: Recent Daily Purchases & Revenue
    const dailyPurchasesRevenueCtx = document.getElementById('dailyPurchasesRevenueChart').getContext('2d');

    // 3. Gráfico: Weekly Traffic for Last 6 Months
    const weeklyTrafficCtx = document.getElementById('weeklyTrafficChart').getContext('2d');

    // 4. Gráfico: Recent Daily Traffic by Channels
    const dailyTrafficChannelsCtx = document.getElementById('dailyTrafficChannelsChart').getContext('2d');

    // 5. Gráfico: Monthly Traffic for Last 12 Months
    const monthlyTrafficCtx = document.getElementById('monthlyTrafficChart').getContext('2d');

    // Aquí es donde definiremos y crearemos cada gráfico individualmente.

    // 1. Gráfico: Recent Daily Traffic (AHORA DENTRO DEL DOMContentLoaded)
    new Chart(dailyTrafficCtx, {
        type: 'line', // Tipo de gráfico: línea
        data: {
            labels: ['06 abr', '13 abr', '20 abr', '27 abr', '04 may', '11 may'], // Etiquetas del eje X (ejemplo de datos)
            datasets: [{
                label: 'Daily Traffic', // Etiqueta para la leyenda
                data: [3500, 2800, 3200, 2500, 3800, 3000], // Valores de tráfico (ejemplo de datos)
                borderColor: 'rgb(75, 192, 192)', // Color de la línea
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color del área bajo la línea
                tension: 0.3, // Suaviza la línea
                fill: true, // Rellena el área bajo la línea
                pointRadius: 0 // Oculta los puntos en la línea
            }]
        },
        options: {
            responsive: true, // Hace el gráfico responsivo
            maintainAspectRatio: false, // Permite que el gráfico no mantenga su relación de aspecto original
            plugins: {
                legend: {
                    display: false // No mostrar la leyenda si solo hay una línea y es obvio
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false // No mostrar líneas de cuadrícula verticales
                    }
                },
                y: {
                    beginAtZero: true, // El eje Y empieza en cero
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)' // Color de las líneas de cuadrícula horizontales
                    },
                    ticks: {
                        callback: function(value) { // Formato de las etiquetas del eje Y (ej: "3K")
                            return value / 1000 + 'K';
                        }
                    }
                }
            }
        }
    });

    // 2. Gráfico: Recent Daily Purchases & Revenue
    new Chart(dailyPurchasesRevenueCtx, {
        type: 'line',
        data: {
            labels: ['06 abr', '13 abr', '20 abr', '27 abr', '04 may', '11 may'], // Misma escala de tiempo
            datasets: [
                {
                    label: 'Purchases', // Primera línea: Compras
                    data: [70, 65, 80, 55, 90, 75], // Datos de ejemplo para compras
                    borderColor: 'rgb(255, 99, 132)', // Color rojo/rosa para compras
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    tension: 0.3,
                    fill: true,
                    pointRadius: 0
                },
                {
                    label: 'Revenue', // Segunda línea: Ingresos
                    data: [60, 50, 70, 45, 80, 65], // Datos de ejemplo para ingresos (valores más bajos que compras)
                    borderColor: 'rgb(54, 162, 235)', // Color azul para ingresos
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    tension: 0.3,
                    fill: true,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true, // ¡Mostrar la leyenda esta vez!
                    position: 'top', // Posición de la leyenda
                    align: 'start', // Alinear la leyenda a la izquierda
                    labels: {
                        boxWidth: 10, // Ancho de la caja de color en la leyenda
                        font: {
                            size: 10 // Tamaño de fuente más pequeño para la leyenda
                        },
                        padding: 15 // Espacio entre elementos de la leyenda
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value + ''; // Deja los valores sin formato K por ahora, o ajusta si es necesario
                        }
                    }
                }
            }
        }
    });

    // 3. Gráfico: Weekly Traffic for Last 6 Months
    new Chart(weeklyTrafficCtx, {
        type: 'line',
        data: {
            labels: ['dic 2024', 'ene 2025', 'feb 2025', 'mar 2025', 'abr 2025', 'may 2025'], // Etiquetas de los últimos 6 meses
            datasets: [{
                label: 'Weekly Traffic',
                data: [550, 480, 620, 500, 700, 650], // Datos de ejemplo para tráfico semanal
                borderColor: 'rgb(255, 159, 64)', // Un color naranja para este gráfico
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
                legend: {
                    display: false // No mostrar leyenda (una sola línea, obvio)
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value + ''; // Deja los valores sin formato 'K' si son pequeños, o ajusta si es necesario
                        }
                    }
                }
            }
        }
    });

    // 4. Gráfico: Recent Daily Traffic by Channels
    new Chart(dailyTrafficChannelsCtx, {
        type: 'line', // Sigue siendo 'line', pero lo configuraremos para apilado
        data: {
            labels: ['06 abr', '13 abr', '20 abr', '27 abr', '04 may', '11 may'], // Misma escala de tiempo
            datasets: [
                {
                    label: 'Direct',
                    data: [800, 750, 900, 700, 1000, 850], // Datos de ejemplo
                    backgroundColor: 'rgba(54, 162, 235, 0.5)', // Azul
                    borderColor: 'rgba(54, 162, 235, 1)',
                    fill: true,
                    stack: 'channels', // Agrupa este dataset para apilar
                    pointRadius: 0
                },
                {
                    label: 'Display',
                    data: [200, 250, 300, 220, 280, 260], // Datos de ejemplo
                    backgroundColor: 'rgba(255, 99, 132, 0.5)', // Rojo/Rosa
                    borderColor: 'rgba(255, 99, 132, 1)',
                    fill: true,
                    stack: 'channels',
                    pointRadius: 0
                },
                {
                    label: 'Email',
                    data: [150, 180, 160, 190, 200, 170], // Datos de ejemplo
                    backgroundColor: 'rgba(75, 192, 192, 0.5)', // Verde azulado
                    borderColor: 'rgba(75, 192, 192, 1)',
                    fill: true,
                    stack: 'channels',
                    pointRadius: 0
                },
                {
                    label: 'Organic Search',
                    data: [1500, 1400, 1700, 1300, 1800, 1600], // Datos de ejemplo
                    backgroundColor: 'rgba(153, 102, 255, 0.5)', // Morado
                    borderColor: 'rgba(153, 102, 255, 1)',
                    fill: true,
                    stack: 'channels',
                    pointRadius: 0
                },
                {
                    label: 'Paid Search',
                    data: [400, 350, 450, 380, 500, 420], // Datos de ejemplo
                    backgroundColor: 'rgba(255, 206, 86, 0.5)', // Amarillo
                    borderColor: 'rgba(255, 206, 86, 1)',
                    fill: true,
                    stack: 'channels',
                    pointRadius: 0
                }
                // Puedes añadir más datasets para "Paid Other", "Video", etc. si los necesitas
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true, // ¡Mostrar la leyenda!
                    position: 'top', // Posición de la leyenda
                    align: 'start', // Alinear la leyenda a la izquierda
                    labels: {
                        boxWidth: 10,
                        font: {
                            size: 10
                        },
                        padding: 10 // Espacio entre elementos de la leyenda
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    stacked: true // ¡Importante para apilar en el eje X!
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    stacked: true, // ¡Importante para apilar en el eje Y!
                    ticks: {
                        callback: function(value) {
                            return value / 1000 + ' mil'; // Formato "X mil"
                        }
                    }
                }
            }
        }
    });

    // 5. Gráfico: Monthly Traffic for Last 12 Months
    new Chart(monthlyTrafficCtx, {
        type: 'bar', // Tipo de gráfico: barras
        data: {
            labels: ['jul 2024', 'ago 2024', 'sep 2024', 'oct 2024', 'nov 2024', 'dic 2024', 'ene 2025', 'feb 2025', 'mar 2025', 'abr 2025', 'may 2025', 'jun 2025'], // Etiquetas de los últimos 12 meses
            datasets: [{
                label: 'Monthly Traffic',
                data: [180000, 200000, 190000, 220000, 210000, 230000, 250000, 240000, 260000, 270000, 280000, 290000], // Datos de ejemplo para tráfico mensual
                backgroundColor: 'rgb(54, 162, 235, 0.8)', // Color azul de las barras (con un poco de transparencia)
                borderColor: 'rgb(54, 162, 235)', // Borde de las barras
                borderWidth: 1 // Ancho del borde
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // No mostrar leyenda (un solo dataset)
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false // No mostrar líneas de cuadrícula verticales
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) { // Formato "X K"
                            return value / 1000 + 'K';
                        }
                    }
                }
            }
        }
    });
}); // Cierre del document.addEventListener('DOMContentLoaded')