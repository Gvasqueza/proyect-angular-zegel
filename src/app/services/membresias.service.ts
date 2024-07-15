import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Membresia } from '../modelos/membresias'; // Asegúrate de tener un modelo para Membresia

@Injectable({
  providedIn: 'root'
})
export class MembresiaService {
  private apiUrl = 'http://localhost:3000/api/membresias'; // URL de la API

  constructor(private http: HttpClient) { }

  obtenerMembresias(): Observable<Membresia[]> {
    return this.http.get<Membresia[]>(this.apiUrl);
  }

  obtenerMembresiaPorId(id: number): Observable<Membresia> {
    return this.http.get<Membresia>(`${this.apiUrl}/${id}`);
  }

  crearMembresia(membresia: Membresia): Observable<any> {
    return this.http.post<any>(this.apiUrl, membresia);
  }

  actualizarMembresia(membresia: Membresia): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${membresia.id}`, membresia);
  }

  eliminarMembresia(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Puedes agregar métodos adicionales según sea necesario
}
