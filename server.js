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

// Lista de préstamos precargada
let prestamos = [
    { id: 1, montoPrestamo: 5000, interes: 2.5, cuotas: 12, fechainicio: '2024-01-01', balance: 2000, idCliente: 1, pagado: false },
    { id: 2, montoPrestamo: 10000, interes: 3.0, cuotas: 24, fechainicio: '2024-06-01', balance: 8000, idCliente: 2, pagado: true },
    { id: 3, montoPrestamo: 7500, interes: 2.75, cuotas: 18, fechainicio: '2023-09-01', balance: 5000, idCliente: 1, pagado: false },
];

// Crear el servidor gRPC
const server = new grpc.Server();

// Implementación del servicio PrestamoService
server.addService(protoService.PrestamoService.service, {
    ObtenerTodos: (call, callback) => {
        // Retorna todos los préstamos
        callback(null, { prestamos });
    },
    ObtenerPorId: (call, callback) => {
        // Filtra el préstamo por ID
        const prestamo = prestamos.find(p => p.id === call.request.id);
        if (prestamo) {
            callback(null, { prestamo });
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Préstamo no encontrado"
            });
        }
    },
    ObtenerPrestamosPorCliente: (call, callback) => {
        // Filtra los préstamos por ID del cliente
        const prestamosCliente = prestamos.filter(p => p.idCliente === call.request.idCliente);
        callback(null, { prestamos: prestamosCliente });
    },
    ObtenerPrestamosPagados: (call, callback) => {
        // Filtra los préstamos que están pagados
        const prestamosPagados = prestamos.filter(p => p.pagado === true);
        callback(null, { prestamos: prestamosPagados });
    },
    ObtenerPrestamosNoPagados: (call, callback) => {
        // Filtra los préstamos que no están pagados
        const prestamosNoPagados = prestamos.filter(p => p.pagado === false);
        callback(null, { prestamos: prestamosNoPagados });
    },
    GuardarPrestamo: (call, callback) => {
        // Guarda un nuevo préstamo en la lista
        const nuevoPrestamo = call.request;
        nuevoPrestamo.id = prestamos.length + 1; // Asignar un nuevo ID
        prestamos.push(nuevoPrestamo);
        callback(null, { prestamo: nuevoPrestamo });
    },
    ActualizarPrestamo: (call, callback) => {
        // Actualiza un préstamo existente
        const prestamoActualizado = prestamos.find(p => p.id === call.request.id);
        if (prestamoActualizado) {
            Object.assign(prestamoActualizado, call.request.prestamo);
            callback(null, { prestamo: prestamoActualizado });
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Préstamo no encontrado"
            });
        }
    },
    EliminarPrestamo: (call, callback) => {
        // Elimina un préstamo por su ID
        const index = prestamos.findIndex(p => p.id === call.request.id);
        if (index !== -1) {
            prestamos.splice(index, 1); // Eliminar el préstamo de la lista
            callback(null, { success: true });
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Préstamo no encontrado"
            });
        }
    }
});

// Iniciar el servidor gRPC
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log('Servidor gRPC de préstamos iniciado en el puerto 50051');
});
