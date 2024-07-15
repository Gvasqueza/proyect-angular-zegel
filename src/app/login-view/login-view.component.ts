import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, CommonModule], // Importa los módulos necesarios
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.css'
})
export class LoginViewComponent implements OnInit {
  loginForm!: FormGroup;
  errorMensaje: string = ''; // Variable para almacenar el mensaje de error

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const usuario = this.loginForm.value;
      this.usuarioService.iniciarSesion(usuario).subscribe({ 
        next: (response) => {
          localStorage.setItem('usuarioId', response.usuario.id);
          localStorage.setItem('nombreUsuario', response.usuario.nombre);
          this.router.navigate(['/dashboard', response.usuario.id]);
        },
        error: (error) => {
          console.error('Error al iniciar sesión:', error);
          if (error.status === 401) {
            this.errorMensaje = 'Correo electrónico o contraseña incorrectos';
          } else {
            this.errorMensaje = 'Ocurrió un error al iniciar sesión';
          }
        }
      });
    }
  }
}

