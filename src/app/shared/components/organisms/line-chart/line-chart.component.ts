import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  public chart?: Chart;

  ngOnInit(): void {
    // Datos ficticios para el número de gallinas registradas por mes
    const data = {
      labels: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      datasets: [{
        label: 'Número de gallinas registradas',
        data: [50, 70, 60, 80, 90, 75, 85, 95, 51, 80, 70, 65], // Números ficticios para cada mes
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    // Crear la gráfica con los datos ficticios
    this.createChart(data);
  }

  createChart(data: any): void {
    // Asegúrate de que el contenedor del gráfico tenga el tamaño adecuado
    if (this.chart) {
      this.chart.destroy(); // Destruye el gráfico existente si hay uno
    }

    // Crear el gráfico
    this.chart = new Chart('chart', {
      type: 'line' as ChartType,
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Número de Gallinas',
            }
          },
          x: {
            title: {
              display: true,
              text: 'Meses',
            }
          }
        }
      }
    });
  }
}
