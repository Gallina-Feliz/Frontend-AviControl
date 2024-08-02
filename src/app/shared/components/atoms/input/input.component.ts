import { Component,Input,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() id: string = 'input';
  @Input() class: string = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
  @Input() placeholder: string = '';
  @Input() required: boolean = true;
  @Output() valueChange = new EventEmitter<string>();

  value: string = '';

  onValueChange() {
    this.valueChange.emit(this.value);
  }
}
