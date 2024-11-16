import { Component } from '@angular/core';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {
  showConfirmation: boolean = false; // Estado inicial para mostrar el contenido

  // Método para manejar la confirmación de la reserva
  confirmReservation(): void {
    this.showConfirmation = true; // Cambia el estado para mostrar el contenido de confirmación
  }

}
