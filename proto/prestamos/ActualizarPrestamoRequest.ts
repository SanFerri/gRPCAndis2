// Original file: proto/prestamos.proto

import type { Prestamo as _prestamos_Prestamo, Prestamo__Output as _prestamos_Prestamo__Output } from '../prestamos/Prestamo';
import type { Long } from '@grpc/proto-loader';

export interface ActualizarPrestamoRequest {
  'id'?: (number | string | Long);
  'prestamo'?: (_prestamos_Prestamo | null);
}

export interface ActualizarPrestamoRequest__Output {
  'id': (string);
  'prestamo': (_prestamos_Prestamo__Output | null);
}
