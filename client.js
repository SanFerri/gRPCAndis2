const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Ruta hacia el archivo prestamos.proto
const PROTO_PATH = path.join(__dirname, './proto/prestamos.proto');

// Cargar el archivo .proto
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const protoService = grpc.loadPackageDefinition(packageDefinition).prestamos;

// Crear el cliente para conectarse al servidor gRPC
const client = new protoService.PrestamoService('localhost:50051', grpc.credentials.createInsecure());

// Ejemplo de solicitud para ObtenerTodos los préstamos
client.ObtenerTodos({}, (error, response) => {
    if (error) {
        console.error('Error al llamar al servidor:', error);
        return;
    }
    console.log('Respuesta del servidor:', response);
});

// Ejemplo de solicitud para ObtenerPorId un préstamo específico
const prestamoRequest = { id: 1 };  // ID de préstamo de ejemplo
client.ObtenerPorId(prestamoRequest, (error, response) => {
    if (error) {
        console.error('Error al llamar al servidor:', error);
        return;
    }
    console.log('Préstamo recibido:', response);
});
