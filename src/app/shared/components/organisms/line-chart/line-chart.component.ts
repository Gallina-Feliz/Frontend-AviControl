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
    // Hypothetical data for registered chickens per month
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [{
        label: 'Number of Chickens Registered',
        data: [150, 230, 180, 220, 300, 250, 320, 400], // Imaginary numbers for chickens
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    // Create the chart
    this.chart = new Chart("chart", {
      type: 'line' as ChartType,
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 4,
            right: 4,
            top: 0,
            bottom: 0,
          },
        },
        scales: {
          y: {
            beginAtZero: true, // Start y-axis from zero
            title: {
              display: true,
              text: 'Number of Chickens',
            }
          },
          x: {
            title: {
              display: true,
              text: 'Months',
            }
          }
        }
      }
    });
  }

}
