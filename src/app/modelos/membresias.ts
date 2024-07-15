export interface Membresia {
    id: number;
    nombre: 'basica' | 'premium';
    descripcion?: string;
    precio: number;
    duracion_dias: number;
  }
  