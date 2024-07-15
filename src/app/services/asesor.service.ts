import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asesor } from '../modelos/asesores'; // Asegúrate de tener un modelo para Asesor

@Injectable({
  providedIn: 'root'
})
export class AsesorService {
  private apiUrl = 'http://localhost:3000/api/asesores'; // URL de la API

  constructor(private http: HttpClient) { }

  obtenerAsesores(): Observable<Asesor[]> {
    return this.http.get<Asesor[]>(this.apiUrl);
  }

  obtenerAsesorPorId(id: number): Observable<Asesor> {
    return this.http.get<Asesor>(`${this.apiUrl}/${id}`);
  }

  crearAsesor(asesor: Asesor): Observable<any> {
    return this.http.post<any>(this.apiUrl, asesor);
  }

  actualizarAsesor(asesor: Asesor): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${asesor.id}`, asesor);
  }

  eliminarAsesor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Puedes agregar métodos adicionales según sea necesario
}
