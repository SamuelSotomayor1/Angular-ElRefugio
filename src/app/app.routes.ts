import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Menu } from './pages/menu/menu';
import { Reservas } from './pages/reservas/reservas';
import { Nosotros } from './pages/nosotros/nosotros';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'menu', component: Menu},
    {path: 'reservas', component: Reservas},
    {path: 'nosotros', component: Nosotros},
];
