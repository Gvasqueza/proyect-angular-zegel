import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sesion } from '../modelos/sesiones'; // Asegúrate de tener un modelo para Sesion

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  private apiUrl = 'http://localhost:3000/api/sesiones'; // URL de la API

  constructor(private http: HttpClient) { }

  obtenerSesiones(): Observable<Sesion[]> {
    return this.http.get<Sesion[]>(this.apiUrl);
  }

  obtenerSesionPorId(id: number): Observable<Sesion> {
    return this.http.get<Sesion>(`${this.apiUrl}/${id}`);
  }

  crearSesion(sesion: Sesion): Observable<any> {
    return this.http.post<any>(this.apiUrl, sesion);
  }

  actualizarSesion(sesion: Sesion): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${sesion.id}`, sesion);
  }

  eliminarSesion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}
