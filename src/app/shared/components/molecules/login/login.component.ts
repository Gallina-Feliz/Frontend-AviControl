import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements AfterViewInit{

  ngAfterViewInit() {
    const container = document.getElementById('container');
    const overlayBtn = document.getElementById('overlayBtn');

    overlayBtn?.addEventListener('click', () => {
      container?.classList.toggle('right-panel-active');
      overlayBtn.classList.remove('BtnScaled');
      window.requestAnimationFrame(() => {
        overlayBtn.classList.add('btnScaled');
      });
    });
  }
}
