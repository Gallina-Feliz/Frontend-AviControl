import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-esp-data-chart',
  templateUrl: './esp-data-chart.component.html',
  styleUrls: ['./esp-data-chart.component.css']
})
export class EspDataChartComponent implements OnInit {
  chart: any;
  distancia: string = 'N/A';  // Variable para mostrar la distancia
  bombaActiva: boolean = false;  // Variable para mostrar el estado de la bomba
  servoAbierto: boolean = false; // Variable para mostrar el estado del servomotor

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.createChart();
    
    // Actualización automática de la gráfica cada 5 segundos
    setInterval(() => {
      this.updateChartWithData();
    }, 5000);
  }

  // Método para crear la gráfica de líneas
  createChart() {
    this.chart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: [],  // Etiquetas para la gráfica (fechas/hora)
        datasets: [{
          label: 'Distancia (cm)',
          data: [],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Fecha y Hora'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Distancia (cm)'
            }
          }
        }
      }
    });
  }

  // Método para obtener datos del ESP8266 y actualizar la gráfica
  updateChartWithData(): void {
    this.http.get('http://192.168.137.35/data')
      .subscribe((data: any) => {
        // Extrae los valores de distancia, estado de la bomba y estado del servomotor
        const distancia = data.distancia || 'N/A';
        const bombaActiva = data.bomba_activa || false;
        const servoAbierto = data.servo_abierto || false;
        const fechaHora = new Date().toLocaleString();  // Fecha y hora actual

        // Actualiza la gráfica con los nuevos datos
        this.chart.data.labels.push(fechaHora);
        this.chart.data.datasets[0].data.push(distancia);
        this.chart.update();

        // Actualiza los valores en la UI
        this.distancia = distancia;
        this.bombaActiva = bombaActiva;
        this.servoAbierto = servoAbierto;
      }, error => {
        console.error('Error al obtener datos del ESP8266:', error);
      });
  }
}
