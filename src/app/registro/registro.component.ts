import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioButton } from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, CommonModule, MatRadioButton, MatRadioModule] // Importa ReactiveFormsModule
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup;
  errorMensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required],
      tipo: ['estudiante', Validators.required] // Valor por defecto 'estudiante'
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const nuevoUsuario = this.registroForm.value;
      this.usuarioService.crearUsuario(nuevoUsuario).subscribe(
        (response) => {
          console.log('Registro exitoso:', response);
          // Redirigir a la página de login después del registro
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error al registrar:', error);
          this.errorMensaje = 'Ocurrió un error al registrarse. Por favor, inténtalo de nuevo.';
        }
      );
    }
  }
}
