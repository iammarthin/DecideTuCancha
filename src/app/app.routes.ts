import { Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: "inicio", component: InicioComponent},
    {path: "buscar", component: BuscarComponent},
    {path: "login", component: LoginComponent},
    {path:"", redirectTo: "inicio", pathMatch:"full"}, 
];
