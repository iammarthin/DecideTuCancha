import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {
  showConfirmation: boolean = false;


  confirmReservation(): void {
    this.showConfirmation = true; 
  }

  nombre: string = '';
  direccion: string = '';
  descripcion: string = '';
  precio: number = 0;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'] || '';
      this.direccion = params['direccion'] || '';
      this.descripcion = params['descripcion'] || '';
      this.precio = params['precio'] || 0;
    });
  }

}