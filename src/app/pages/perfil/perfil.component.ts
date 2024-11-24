import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  formData = {
    name: '',
    phone: '',
    email: '',
    birthdate: '',
    gender: '',
    team: ''
  };

  onSubmit() {
    console.log('Formulario enviado:', this.formData);
  }

  onCancel() {
    console.log('Formulario cancelado.');
    this.formData = {
      name: '',
      phone: '',
      email: '',
      birthdate: '',
      gender: '',
      team: ''
    };
  }


}
