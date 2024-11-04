import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router // Inyecta Router
  ) {}

  buscarComponent = this.fb.group({
    
    Ubicacion: ["", Validators.required],
    Tipo: ["", Validators.required],
    Fecha: ["", Validators.required],
    Hora: ["", Validators.required]
    
  })

  __buscar(){
    if(this. buscarComponent.valid){
      console.log(this.buscarComponent.value)

      // Navega a la página de búsqueda y pasa los datos como parámetros de consulta
      this.router.navigate(['/buscar'], {
        queryParams: this.buscarComponent.value
      });
      
    }else{
      alert("Todos los campos obligatorios!")
    }
    
  }

}
