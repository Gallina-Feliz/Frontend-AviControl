import { Component, AfterViewInit , ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements AfterViewInit {
  ngAfterViewInit() {
    const container = document.getElementById('container');
    const overlayBtn = document.getElementById('overlayBtn');

    overlayBtn?.addEventListener('click', () => {
      container?.classList.toggle('right-panel-active');
      overlayBtn.classList.remove('btnScaled');
      window.requestAnimationFrame(() => {
        overlayBtn.classList.add('btnScaled');
      });
    });
  }
}
