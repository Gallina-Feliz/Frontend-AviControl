import { AfterViewInit, Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent implements AfterViewInit {
  @Input({ required: true }) public icon!: string;
  @Input() public size: number = 32;
  @Input() public color: string = "black";

  @ViewChild("icon") public iconView!: ElementRef<HTMLElement>;

  @HostBinding("style.font-size.px")
  get fontSize() {
    return this.size;
  }

  public ngAfterViewInit(): void {
    const el = this.iconView.nativeElement;
    el.style.color = this.color;
    if (this.icon) el.classList.add(this.icon);
  }
}
