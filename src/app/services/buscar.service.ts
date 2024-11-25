import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  constructor(private readonly http: HttpClient
  ) { }
  get_Busqueda(){
    return this.http.get("http://44.192.117.88/api/Complejoes", {responseType: "json"})
  }

}
