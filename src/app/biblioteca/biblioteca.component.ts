// biblioteca.component.ts

import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../biblioteca.service'; // Ajusta la ruta según la ubicación de tu servicio

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {
  libros: any[];

  constructor(private bibliotecaService: BibliotecaService) {}

  ngOnInit(): void {
    this.bibliotecaService.getLibros().subscribe(
      (data) => {
        this.libros = data;
        console.log('Libros obtenidos:', this.libros); // Para verificar en la consola
      },
      (error) => {
        console.error('Error al obtener los libros', error);
      }
    );
  }
}
