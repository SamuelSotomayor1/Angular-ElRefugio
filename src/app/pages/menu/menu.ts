import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-menu',
  imports: [Navbar, Footer],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

}
