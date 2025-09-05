import { Component } from '@angular/core';
import { NavItem } from '../nav-item/nav-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NavItem, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isMenuOpen = false;

    items = [
    {
      name: "Menú",
      path: "/menu"
    },
    {
      name: "Reservas",
      path: "/reservas"
    },
    {
      name: "Nosotros",
      path: "/nosotros"
    },
  ]
}
