// Original file: proto/prestamos.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ActualizarPrestamoRequest as _prestamos_ActualizarPrestamoRequest, ActualizarPrestamoRequest__Output as _prestamos_ActualizarPrestamoRequest__Output } from '../prestamos/ActualizarPrestamoRequest';
import type { ClienteRequest as _prestamos_ClienteRequest, ClienteRequest__Output as _prestamos_ClienteRequest__Output } from '../prestamos/ClienteRequest';
import type { EliminarPrestamoResponse as _prestamos_EliminarPrestamoResponse, EliminarPrestamoResponse__Output as _prestamos_EliminarPrestamoResponse__Output } from '../prestamos/EliminarPrestamoResponse';
import type { Empty as _prestamos_Empty, Empty__Output as _prestamos_Empty__Output } from '../prestamos/Empty';
import type { ListaPrestamosResponse as _prestamos_ListaPrestamosResponse, ListaPrestamosResponse__Output as _prestamos_ListaPrestamosResponse__Output } from '../prestamos/ListaPrestamosResponse';
import type { Prestamo as _prestamos_Prestamo, Prestamo__Output as _prestamos_Prestamo__Output } from '../prestamos/Prestamo';
import type { PrestamoRequest as _prestamos_PrestamoRequest, PrestamoRequest__Output as _prestamos_PrestamoRequest__Output } from '../prestamos/PrestamoRequest';
import type { PrestamoResponse as _prestamos_PrestamoResponse, PrestamoResponse__Output as _prestamos_PrestamoResponse__Output } from '../prestamos/PrestamoResponse';

export interface PrestamoServiceClient extends grpc.Client {
  ActualizarPrestamo(argument: _prestamos_ActualizarPrestamoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  ActualizarPrestamo(argument: _prestamos_ActualizarPrestamoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  ActualizarPrestamo(argument: _prestamos_ActualizarPrestamoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  ActualizarPrestamo(argument: _prestamos_ActualizarPrestamoRequest, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  actualizarPrestamo(argument: _prestamos_ActualizarPrestamoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  actualizarPrestamo(argument: _prestamos_ActualizarPrestamoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  actualizarPrestamo(argument: _prestamos_ActualizarPrestamoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  actualizarPrestamo(argument: _prestamos_ActualizarPrestamoRequest, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  
  EliminarPrestamo(argument: _prestamos_PrestamoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_EliminarPrestamoResponse__Output>): grpc.ClientUnaryCall;
  EliminarPrestamo(argument: _prestamos_PrestamoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_prestamos_EliminarPrestamoResponse__Output>): grpc.ClientUnaryCall;
  EliminarPrestamo(argument: _prestamos_PrestamoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_EliminarPrestamoResponse__Output>): grpc.ClientUnaryCall;
  EliminarPrestamo(argument: _prestamos_PrestamoRequest, callback: grpc.requestCallback<_prestamos_EliminarPrestamoResponse__Output>): grpc.ClientUnaryCall;
  eliminarPrestamo(argument: _prestamos_PrestamoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_EliminarPrestamoResponse__Output>): grpc.ClientUnaryCall;
  eliminarPrestamo(argument: _prestamos_PrestamoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_prestamos_EliminarPrestamoResponse__Output>): grpc.ClientUnaryCall;
  eliminarPrestamo(argument: _prestamos_PrestamoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_EliminarPrestamoResponse__Output>): grpc.ClientUnaryCall;
  eliminarPrestamo(argument: _prestamos_PrestamoRequest, callback: grpc.requestCallback<_prestamos_EliminarPrestamoResponse__Output>): grpc.ClientUnaryCall;
  
  GuardarPrestamo(argument: _prestamos_Prestamo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  GuardarPrestamo(argument: _prestamos_Prestamo, metadata: grpc.Metadata, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  GuardarPrestamo(argument: _prestamos_Prestamo, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  GuardarPrestamo(argument: _prestamos_Prestamo, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  guardarPrestamo(argument: _prestamos_Prestamo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  guardarPrestamo(argument: _prestamos_Prestamo, metadata: grpc.Metadata, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  guardarPrestamo(argument: _prestamos_Prestamo, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  guardarPrestamo(argument: _prestamos_Prestamo, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  
  ObtenerPorId(argument: _prestamos_PrestamoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  ObtenerPorId(argument: _prestamos_PrestamoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  ObtenerPorId(argument: _prestamos_PrestamoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  ObtenerPorId(argument: _prestamos_PrestamoRequest, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  obtenerPorId(argument: _prestamos_PrestamoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  obtenerPorId(argument: _prestamos_PrestamoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  obtenerPorId(argument: _prestamos_PrestamoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  obtenerPorId(argument: _prestamos_PrestamoRequest, callback: grpc.requestCallback<_prestamos_PrestamoResponse__Output>): grpc.ClientUnaryCall;
  
  ObtenerPrestamosNoPagados(argument: _prestamos_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  ObtenerPrestamosNoPagados(argument: _prestamos_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  ObtenerPrestamosNoPagados(argument: _prestamos_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  ObtenerPrestamosNoPagados(argument: _prestamos_Empty, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  obtenerPrestamosNoPagados(argument: _prestamos_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  obtenerPrestamosNoPagados(argument: _prestamos_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  obtenerPrestamosNoPagados(argument: _prestamos_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  obtenerPrestamosNoPagados(argument: _prestamos_Empty, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  
  ObtenerPrestamosPagados(argument: _prestamos_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  ObtenerPrestamosPagados(argument: _prestamos_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  ObtenerPrestamosPagados(argument: _prestamos_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  ObtenerPrestamosPagados(argument: _prestamos_Empty, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  obtenerPrestamosPagados(argument: _prestamos_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  obtenerPrestamosPagados(argument: _prestamos_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  obtenerPrestamosPagados(argument: _prestamos_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  obtenerPrestamosPagados(argument: _prestamos_Empty, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  
  ObtenerPrestamosPorCliente(argument: _prestamos_ClienteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  ObtenerPrestamosPorCliente(argument: _prestamos_ClienteRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  ObtenerPrestamosPorCliente(argument: _prestamos_ClienteRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  ObtenerPrestamosPorCliente(argument: _prestamos_ClienteRequest, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  obtenerPrestamosPorCliente(argument: _prestamos_ClienteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  obtenerPrestamosPorCliente(argument: _prestamos_ClienteRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  obtenerPrestamosPorCliente(argument: _prestamos_ClienteRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  obtenerPrestamosPorCliente(argument: _prestamos_ClienteRequest, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  
  ObtenerTodos(argument: _prestamos_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  ObtenerTodos(argument: _prestamos_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  ObtenerTodos(argument: _prestamos_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  ObtenerTodos(argument: _prestamos_Empty, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  obtenerTodos(argument: _prestamos_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  obtenerTodos(argument: _prestamos_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  obtenerTodos(argument: _prestamos_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  obtenerTodos(argument: _prestamos_Empty, callback: grpc.requestCallback<_prestamos_ListaPrestamosResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface PrestamoServiceHandlers extends grpc.UntypedServiceImplementation {
  ActualizarPrestamo: grpc.handleUnaryCall<_prestamos_ActualizarPrestamoRequest__Output, _prestamos_PrestamoResponse>;
  
  EliminarPrestamo: grpc.handleUnaryCall<_prestamos_PrestamoRequest__Output, _prestamos_EliminarPrestamoResponse>;
  
  GuardarPrestamo: grpc.handleUnaryCall<_prestamos_Prestamo__Output, _prestamos_PrestamoResponse>;
  
  ObtenerPorId: grpc.handleUnaryCall<_prestamos_PrestamoRequest__Output, _prestamos_PrestamoResponse>;
  
  ObtenerPrestamosNoPagados: grpc.handleUnaryCall<_prestamos_Empty__Output, _prestamos_ListaPrestamosResponse>;
  
  ObtenerPrestamosPagados: grpc.handleUnaryCall<_prestamos_Empty__Output, _prestamos_ListaPrestamosResponse>;
  
  ObtenerPrestamosPorCliente: grpc.handleUnaryCall<_prestamos_ClienteRequest__Output, _prestamos_ListaPrestamosResponse>;
  
  ObtenerTodos: grpc.handleUnaryCall<_prestamos_Empty__Output, _prestamos_ListaPrestamosResponse>;
  
}

export interface PrestamoServiceDefinition extends grpc.ServiceDefinition {
  ActualizarPrestamo: MethodDefinition<_prestamos_ActualizarPrestamoRequest, _prestamos_PrestamoResponse, _prestamos_ActualizarPrestamoRequest__Output, _prestamos_PrestamoResponse__Output>
  EliminarPrestamo: MethodDefinition<_prestamos_PrestamoRequest, _prestamos_EliminarPrestamoResponse, _prestamos_PrestamoRequest__Output, _prestamos_EliminarPrestamoResponse__Output>
  GuardarPrestamo: MethodDefinition<_prestamos_Prestamo, _prestamos_PrestamoResponse, _prestamos_Prestamo__Output, _prestamos_PrestamoResponse__Output>
  ObtenerPorId: MethodDefinition<_prestamos_PrestamoRequest, _prestamos_PrestamoResponse, _prestamos_PrestamoRequest__Output, _prestamos_PrestamoResponse__Output>
  ObtenerPrestamosNoPagados: MethodDefinition<_prestamos_Empty, _prestamos_ListaPrestamosResponse, _prestamos_Empty__Output, _prestamos_ListaPrestamosResponse__Output>
  ObtenerPrestamosPagados: MethodDefinition<_prestamos_Empty, _prestamos_ListaPrestamosResponse, _prestamos_Empty__Output, _prestamos_ListaPrestamosResponse__Output>
  ObtenerPrestamosPorCliente: MethodDefinition<_prestamos_ClienteRequest, _prestamos_ListaPrestamosResponse, _prestamos_ClienteRequest__Output, _prestamos_ListaPrestamosResponse__Output>
  ObtenerTodos: MethodDefinition<_prestamos_Empty, _prestamos_ListaPrestamosResponse, _prestamos_Empty__Output, _prestamos_ListaPrestamosResponse__Output>
}
