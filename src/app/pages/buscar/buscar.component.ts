import { Component, OnInit } from '@angular/core';
import { BuscarService } from '../../services/buscar.service';
import { ActivatedRoute } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent implements OnInit {
  complejos: any = []; 
  complejosFiltrados: any = [];
  ubicacion: string = ''; 

  constructor(
    private readonly bs: BuscarService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    
    this.route.queryParams.subscribe((params) => {
      this.ubicacion = params['Ubicacion'] || ''; 
      this.__listarComplejos(); 
    });
  }

  __listarComplejos(): void {
    this.bs.get_Busqueda().subscribe((rest: any) => {
      this.complejos = rest; 

      this.complejosFiltrados = this.complejos.filter((p: any) => 
        p.direccion.toLowerCase().includes(this.ubicacion.toLowerCase())
      );

      console.log('Resultados filtrados:', this.complejosFiltrados);
    });
  }


  irAReserva(complejo: any): void {
    this.router.navigate(['/reservar'], {
      queryParams: {
        nombre: complejo.nombre,
        direccion: complejo.direccion,
        descripcion: complejo.descripcion,
        precio: complejo.precioPorHora
      }
    });
  }
}
