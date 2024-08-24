import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, ChartConfiguration, registerables } from 'chart.js';

@Component({
  selector: 'app-diagrama',
  templateUrl: './diagrama.component.html',
  styleUrls: ['./diagrama.component.css']
})
export class DiagramaComponent implements OnInit {

  public chart: Chart;

  constructor() {
    // Registrar todos los componentes necesarios
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    };

    const config: ChartConfiguration = {
      type: 'line' as ChartType,
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Line Chart Example'
          }
        }
      }
    };

    this.chart = new Chart("chart", config);
  }

}
