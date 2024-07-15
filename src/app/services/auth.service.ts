import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject, throwError} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Usuario } from '../modelos/usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/usuarios';
  private usuarioAutenticadoSubject = new BehaviorSubject<Usuario | null>(null);
  usuarioAutenticado$ = this.usuarioAutenticadoSubject.asObservable();

  constructor(private http: HttpClient) { }

  iniciarSesion(usuario: Partial<Usuario>): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, usuario).pipe(
      tap(usuarioAutenticado => {
        if (usuarioAutenticado) {
          this.usuarioAutenticadoSubject.next(usuarioAutenticado);
          console.log('AuthService: usuarioAutenticadoSubject actualizado:', this.usuarioAutenticadoSubject.value);
        } 
      }),
      catchError(error => {
        console.error('AuthService: Error al iniciar sesión:', error);
        return throwError(() => new Error('Credenciales inválidas')); // Lanzar un error en caso de fallo
      })
    );
  }

  cerrarSesion() {
    this.usuarioAutenticadoSubject.next(null);
  }

  estaAutenticado(): boolean {
    return this.usuarioAutenticadoSubject.value !== null;
  }
}
