// Original file: proto/prestamos.proto

import type { Long } from '@grpc/proto-loader';

export interface Prestamo {
  'id'?: (number | string | Long);
  'montoPrestamo'?: (number | string | Long);
  'interes'?: (number | string);
  'cuotas'?: (number);
  'fechainicio'?: (string);
  'balance'?: (number | string | Long);
  'idCliente'?: (number | string | Long);
  'pagado'?: (boolean);
}

export interface Prestamo__Output {
  'id': (string);
  'montoPrestamo': (string);
  'interes': (number);
  'cuotas': (number);
  'fechainicio': (string);
  'balance': (string);
  'idCliente': (string);
  'pagado': (boolean);
}
