// Original file: proto/prestamos.proto

import type { Long } from '@grpc/proto-loader';

export interface PrestamoRequest {
  'id'?: (number | string | Long);
}

export interface PrestamoRequest__Output {
  'id': (string);
}
