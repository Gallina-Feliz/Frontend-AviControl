import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, ChartConfiguration, registerables } from 'chart.js';

@Component({
  selector: 'app-grafica-radio',
  templateUrl: './grafica-radio.component.html',
  styleUrls: ['./grafica-radio.component.css']
})
export class GraficaRadioComponent implements OnInit {

  public pieChart: Chart;

  constructor() {
    // Registrar todos los componentes necesarios
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100, 40, 120, 70],
          backgroundColor: [
            'rgba(0, 0, 255, 1)',    // Azul fuerte
            'rgba(255, 255, 0, 1)',  // Amarillo fuerte
            'rgba(0, 128, 0, 1)',    // Verde fuerte
            'rgba(128, 0, 128, 1)',  // Púrpura fuerte
            'rgba(255, 165, 0, 1)'   // Naranja fuerte
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }
      ]
    };

    const config: ChartConfiguration = {
      type: 'pie' as ChartType,
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Pie Chart Example'
          }
        }
      }
    };

    this.pieChart = new Chart("pieChart", config);
  }

}
