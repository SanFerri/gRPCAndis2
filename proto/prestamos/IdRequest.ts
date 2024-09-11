// Original file: proto/prestamos.proto

import type { Long } from '@grpc/proto-loader';

export interface IdRequest {
  'id'?: (number | string | Long);
}

export interface IdRequest__Output {
  'id': (string);
}
