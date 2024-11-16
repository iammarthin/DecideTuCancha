import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogin: boolean = true; // Estado inicial: mostrar formulario de inicio de sesión

  switchToRegister(event: Event): void {
    event.preventDefault();
    this.isLogin = false; // Cambiar al formulario de registro

}

switchToLogin(event: Event): void {
  event.preventDefault();
  this.isLogin = true; // Cambiar al formulario de inicio de sesión
}
}

