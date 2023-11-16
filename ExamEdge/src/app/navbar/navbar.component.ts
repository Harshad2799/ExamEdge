import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sidebarStyles: { [key: string]: string } = {};
  constructor(private route: Router) { }

  menuItem: String = 'default'


  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {

      if (val.url) {
        if (val.url.includes('user')) {
          this.menuItem = "user"
        } else if (val.url.includes('admin')) {
          this.menuItem = "admin"
          console.warn("admin ")
        } else {
          this.menuItem = "default"
          console.warn("default ")
        }

      }
    }
    )
  }

  logout(){
    this.route.navigate(["/home"])
  }

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

