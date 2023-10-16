import { Component } from '@angular/core';

@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  sidebarStyles: { [key: string]: string } = {};

  openNav(): void {
    this.sidebarStyles = {
      'width': '250px',
      'display': 'block'
    };
  }

  closeNav(): void {
    this.sidebarStyles = {
      'width': '0',
      'display': 'none'
    };
  }

}
