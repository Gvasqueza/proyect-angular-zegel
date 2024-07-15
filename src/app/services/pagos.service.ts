import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pago } from '../modelos/pagos'; // Asegúrate de tener un modelo para Pago

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private apiUrl = 'http://localhost:3000/api/pagos'; // URL de la API

  constructor(private http: HttpClient) { }

  obtenerPagos(): Observable<Pago[]> {
    return this.http.get<Pago[]>(this.apiUrl);
  }

  obtenerPagoPorId(id: number): Observable<Pago> {
    return this.http.get<Pago>(`${this.apiUrl}/${id}`);
  }

  crearPago(pago: Pago): Observable<any> {
    return this.http.post<any>(this.apiUrl, pago);
  }

  actualizarPago(pago: Pago): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${pago.id}`, pago);
  }

  eliminarPago(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Puedes agregar métodos adicionales según sea necesario
}
