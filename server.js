const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = path.join(__dirname, './proto/prestamos.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const protoService = grpc.loadPackageDefinition(packageDefinition).prestamos;

let prestamos = [
    { id: 0, montoPrestamo: 5000, interes: 2.5, cuotas: 12, fechainicio: '2024-01-01', balance: 2000, idCliente: 1, pagado: false },
    { id: 1, montoPrestamo: 10000, interes: 3.0, cuotas: 24, fechainicio: '2024-06-01', balance: 8000, idCliente: 2, pagado: true },
    { id: 2, montoPrestamo: 7500, interes: 2.75, cuotas: 18, fechainicio: '2023-09-01', balance: 5000, idCliente: 1, pagado: false },
];

let nextId = prestamos.reduce((max, p) => Math.max(max, p.id), -1) + 1; // Ajustado para iniciar en 1

const server = new grpc.Server();

server.addService(protoService.PrestamoService.service, {
    ObtenerTodos: (call, callback) => {
        callback(null, { prestamos });
    },
    ObtenerPorId: (call, callback) => {
        const prestamo = prestamos.find(p => p.id == call.request.id);
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
        const prestamosCliente = prestamos.filter(p => p.idCliente == call.request.idCliente);
        callback(null, { prestamos: prestamosCliente });
    },
    ObtenerPrestamosPagados: (call, callback) => {
        const prestamosPagados = prestamos.filter(p => p.pagado == true);
        callback(null, { prestamos: prestamosPagados });
    },
    ObtenerPrestamosNoPagados: (call, callback) => {
        const prestamosNoPagados = prestamos.filter(p => p.pagado == false);
        callback(null, { prestamos: prestamosNoPagados });
    },
    GuardarPrestamo: (call, callback) => {
        const nuevoPrestamo = call.request;
        nuevoPrestamo.id = nextId++;
        prestamos.push(nuevoPrestamo);
        console.log(`Nuevo préstamo guardado con ID: ${nuevoPrestamo.id}`);
        callback(null, { prestamo: nuevoPrestamo });
    },
    ActualizarPrestamo: (call, callback) => {
        const id = call.request.id;
        call.request.prestamo.id = id;
        const prestamoActualizado = prestamos.find(p => p.id == id);
        console.log("id:", id)
        console.log("prestamoActualizadoId", prestamoActualizado.id)
        console.log(call.request.prestamo)
        console.log(prestamoActualizado)
        if (prestamoActualizado) {
            Object.assign(prestamoActualizado, call.request.prestamo);
            console.log(`Préstamo actualizado con ID: ${prestamoActualizado.id}`);
            callback(null, { prestamo: prestamoActualizado });
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Préstamo no encontrado"
            });
        }
    },
    EliminarPrestamo: (call, callback) => {
        const id = call.request.id;
        const index = prestamos.findIndex(p => p.id == id);
        if (index != -1) {
            prestamos.splice(index, 1);
            console.log(`Préstamo eliminado con ID: ${id}`);
            callback(null, { success: true });
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Préstamo no encontrado"
            });
        }
    }
});

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log('Servidor gRPC de préstamos iniciado en el puerto 50051');
});
