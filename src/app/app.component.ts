import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DecideTuCancha';

  loggedUser: any = null;

  constructor(
    private router: Router,
    private userService: UsuarioService
  ) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('loggedUser');
    this.userService.loggedUser$.subscribe((user) => {
      this.loggedUser = user;
    });
    if (storedUser) {
      console.log(storedUser);
      this.loggedUser = JSON.parse(storedUser);
    }
  }
  logout(): void {
    localStorage.removeItem('loggedUser');
    this.userService.logout();
    this.loggedUser = null;

    this.router.navigate(['/inicio']);
  }
}
