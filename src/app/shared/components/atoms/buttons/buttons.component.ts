import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-2',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  @Input() public type: "primary" | "secondary" = "primary";
  @Input() public label: string = "";
}
