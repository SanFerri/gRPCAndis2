// Original file: proto/prestamos.proto

import type { Long } from '@grpc/proto-loader';

export interface ClienteRequest {
  'idCliente'?: (number | string | Long);
}

export interface ClienteRequest__Output {
  'idCliente': (string);
}
