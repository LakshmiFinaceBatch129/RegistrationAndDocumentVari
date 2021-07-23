import { Component, OnInit, ElementRef } from '@angular/core';

import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import Chart from 'chart.js';
import { Menu } from '../../model/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuItems: any[];
  role: string;
  constructor() {}

  ngOnInit() {
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItems = Menu.menu;
    console.log(this.menuItems);
    this.role = sessionStorage.getItem("role");
    console.log(this.role);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
