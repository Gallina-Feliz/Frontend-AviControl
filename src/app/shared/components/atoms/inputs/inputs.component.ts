
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css',
})
export class InputsComponent {

  @Input() public type: string = "text";
  @Input() public placeholder: string = "";

  @Output('valueChange') public valueEmitter = new EventEmitter<string>();

  public onValueChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.valueEmitter.emit(target.value);
  }

}
