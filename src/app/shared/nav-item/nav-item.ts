import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavItemProps{
  name: string,
  path: string,
};

@Component({
  selector: 'app-nav-item',
  imports: [RouterLink],
  templateUrl: './nav-item.html',
  styleUrl: './nav-item.css'
})
export class NavItem {
  @Input() data!: NavItemProps;
}
