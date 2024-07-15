export interface Sesion {
    id: number;
    estudiante_id?: number;
    asesor_id?: number;
    fecha: Date;
    materia?: string;
    estado: 'solicitada' | 'confirmada' | 'cancelada';
  }
  