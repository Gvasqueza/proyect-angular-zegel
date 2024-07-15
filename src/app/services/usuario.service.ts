import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  crearUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.apiUrl, usuario);
  }

  actualizarUsuario(usuario: Usuario): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${usuario.id}`, usuario);
  }

  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  iniciarSesion(usuario: Partial<Usuario>): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, usuario); // Asegúrate de que la ruta en tu API sea '/login'
  }
}
