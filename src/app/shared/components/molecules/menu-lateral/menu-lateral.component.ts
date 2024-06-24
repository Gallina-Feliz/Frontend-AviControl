import { Component } from '@angular/core';
import { MenuStateService } from '../../../../features/salud-gallinas/services/menu-state/menu-state.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {
  
  ecommerceDropdownVisible: boolean = false;

  toggleEcommerceDropdown() {
    this.ecommerceDropdownVisible = !this.ecommerceDropdownVisible;
  }
}