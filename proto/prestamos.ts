import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PrestamoServiceClient as _prestamos_PrestamoServiceClient, PrestamoServiceDefinition as _prestamos_PrestamoServiceDefinition } from './prestamos/PrestamoService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
  prestamos: {
    ActualizarPrestamoRequest: MessageTypeDefinition
    ClienteRequest: MessageTypeDefinition
    EliminarPrestamoResponse: MessageTypeDefinition
    Empty: MessageTypeDefinition
    ListaPrestamosResponse: MessageTypeDefinition
    Prestamo: MessageTypeDefinition
    PrestamoRequest: MessageTypeDefinition
    PrestamoResponse: MessageTypeDefinition
    PrestamoService: SubtypeConstructor<typeof grpc.Client, _prestamos_PrestamoServiceClient> & { service: _prestamos_PrestamoServiceDefinition }
  }
}

