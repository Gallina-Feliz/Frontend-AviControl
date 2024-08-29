import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'; // Importar el Router

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy {
  carouselImages: string[] = [
    '../../../../../assets/images/fondoG.jpg',
    '../../../../../assets/images/',
  ];
  activeImageIndex: number = 0;
  carouselInterval: any;

  constructor(private router: Router) {} // Inyectar el Router en el constructor

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.activeImageIndex = (this.activeImageIndex + 1) % this.carouselImages.length;
    }, 5000); // Cambia la imagen cada 5 segundos
  }

  stopCarousel() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  // Métodos para navegar
  navigateToLogin() {
    this.router.navigate(['/login']); // Navega a la página de login
  }

  navigateToRegister() {
    this.router.navigate(['/register']); // Navega a la página de registro
  }
}
