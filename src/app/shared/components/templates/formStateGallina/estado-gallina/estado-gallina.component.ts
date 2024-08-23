import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-gallina',
  templateUrl: './estado-gallina.component.html',
  styleUrl: './estado-gallina.component.css'
})
export class EstadoGallinaComponent implements OnInit {
  isSick: string = 'no';

  constructor() { }

  ngOnInit(): void {
    this.toggleFields();
  }

  toggleFields() {
    const additionalFields = document.getElementById('additionalFields');
    if (additionalFields) {
      const isSick = (document.querySelector('input[name="isSick"]:checked') as HTMLInputElement).value;
      if (isSick === 'si') {
        additionalFields.classList.remove('hidden');
      } else {
        additionalFields.classList.add('hidden');
      }
    }
  }
}
