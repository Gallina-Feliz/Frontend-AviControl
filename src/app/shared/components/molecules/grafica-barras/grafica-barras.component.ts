import { Component, AfterViewInit } from '@angular/core';
import { Chart, ChartType, ChartConfiguration, registerables } from 'chart.js';

@Component({
  selector: 'app-grafica-barras',
  templateUrl: './grafica-barras.component.html',
  styleUrls: ['./grafica-barras.component.css']
})
export class GraficaBarrasComponent implements AfterViewInit {

  public barChart: Chart;

  constructor() {
    // Registrar todos los componentes necesarios
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(75, 192, 192, 0.2)', /* Color de fondo de las barras */
          borderColor: 'rgba(75, 192, 192, 1)',      /* Color del borde de las barras */
          borderWidth: 1
        }
      ]
    };

    const config: ChartConfiguration = {
      type: 'bar' as ChartType,
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Bar Chart Example'
          }
        },
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    };

    this.barChart = new Chart("barChart", config);
  }

}
