import { Component, OnInit, Renderer2, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  @ViewChild('container', { static: true }) container!: ElementRef;
  @ViewChild('overlayBtn', { static: true }) overlayBtn!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log('container:', this.container);
    console.log('overlayBtn:', this.overlayBtn);

    if (this.overlayBtn && this.container) {
      this.renderer.listen(this.overlayBtn.nativeElement, 'click', () => {
        console.log('Button clicked');
        this.toggleOverlay();
      });
    }
  }

  toggleOverlay(): void {
    console.log('toggleOverlay called');

    if (this.container.nativeElement.classList.contains('right-panel-active')) {
      this.renderer.removeClass(this.container.nativeElement, 'right-panel-active');
    } else {
      this.renderer.addClass(this.container.nativeElement, 'right-panel-active');
    }

    this.renderer.removeClass(this.overlayBtn.nativeElement, 'btnScaled');
    window.requestAnimationFrame(() => {
      this.renderer.addClass(this.overlayBtn.nativeElement, 'btnScaled');
    });
  }

}
