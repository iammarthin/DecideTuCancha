import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogin: boolean = true;
  errorMessage: string = '';
  constructor(
    private readonly userService: UsuarioService,
    private router: Router
  ){}

  users: any = []

  switchToRegister(event: Event): void {
    event.preventDefault();
    console.log('Cambiando a formulario de registro');
    this.isLogin = false;

  }

  switchToLogin(event: Event): void {
  event.preventDefault();
  console.log('Cambiando a formulario de inicio de sesión');
  this.isLogin = true;
  }

  __validar_login(event: Event): void {
    event.preventDefault();
  
    const form = event.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
  
    if (!email || !password) {
      console.error('Por favor, ingresa el correo y la contraseña');
      return;
    }

    this.userService.__be_Users().subscribe(
      (response: any) => {
        const usuarios = response;
        const usuarioValido = usuarios.find(
          (usuario: any) => usuario.email === email && usuario.contraseña === password
        );
        console.log(usuarios);
        console.log(usuarioValido);
        if (usuarioValido) {
          console.log('Inicio de sesión exitoso:', usuarioValido);
          this.userService.login(usuarioValido);
          this.errorMessage = '';
          this.router.navigate(['/inicio']);

        } else {
          console.log("error");
          alert("Credenciales Invalidas")
          this.errorMessage = 'Credenciales inválidas';
        }
      },
      (error) => {
        this.errorMessage = 'Error al obtener usuarios. Inténtalo más tarde.';
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

}

