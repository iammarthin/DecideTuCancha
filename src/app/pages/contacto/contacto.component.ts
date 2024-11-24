import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Datos enviados:', this.contactData);
    alert('¡Formulario enviado con éxito!');
  }

  onReset() {
    this.contactData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

}
