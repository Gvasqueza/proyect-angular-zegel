export interface Pago {
    id: number;
    usuario_id: number;
    membresia_id: number;
    monto: number;
    fecha_pago: Date;
    metodo_pago?: string;
  }
  