import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogin: boolean = true; // Estado inicial: mostrar formulario de inicio de sesión

  switchToRegister(event: Event): void {
    event.preventDefault();
    console.log('Cambiando a formulario de registro');
    this.isLogin = false; // Cambiar al formulario de registro

  }

  switchToLogin(event: Event): void {
  event.preventDefault();
  console.log('Cambiando a formulario de inicio de sesión');
  this.isLogin = true; // Cambiar al formulario de inicio de sesión
  }
}

