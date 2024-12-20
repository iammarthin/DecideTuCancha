import { Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { VerComponent } from './pages/ver/ver.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { PagoComponent } from './pages/pago/pago.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    {path: "inicio", component: InicioComponent},
    {path: "buscar", component: BuscarComponent},
    {path: "login", component: LoginComponent},
    {path: "perfil", component: PerfilComponent},
    {path: "ver", component: VerComponent},
    {path: "reservar", component: ReservaComponent},
    {path: "pago", component: PagoComponent},
    {path: "contacto", component: ContactoComponent},
    { path: '', redirectTo: '/buscar', pathMatch: 'full' },
    {path:"", redirectTo: "inicio", pathMatch:"full"}, 
];


