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

const client = new protoService.PrestamoService('localhost:50051', grpc.credentials.createInsecure());

// Método para ObtenerTodos los préstamos
function obtenerTodos(callback) {
    client.ObtenerTodos({}, (error, response) => {
        if (error) {
            console.error('Error al llamar al servidor:', error);
            return;
        }
        callback(response);
    });
}

// Método para ObtenerPorId un préstamo específico
function obtenerPorId(id, callback) {
    client.ObtenerPorId({ id: id }, (error, response) => {
        if (error) {
            console.error('Error al llamar al servidor:', error);
            return;
        }
        callback(response);
    });
}

// Método para ObtenerPrestamosPorCliente
function obtenerPrestamosPorCliente(idCliente, callback) {
    client.ObtenerPrestamosPorCliente({ idCliente: idCliente }, (error, response) => {
        if (error) {
            console.error('Error al llamar al servidor:', error);
            return;
        }
        callback(response);
    });
}

// Método para ObtenerPrestamosPagados
function obtenerPrestamosPagados(callback) {
    client.ObtenerPrestamosPagados({}, (error, response) => {
        if (error) {
            console.error('Error al llamar al servidor:', error);
            return;
        }
        callback(response);
    });
}

// Método para ObtenerPrestamosNoPagados
function obtenerPrestamosNoPagados(callback) {
    client.ObtenerPrestamosNoPagados({}, (error, response) => {
        if (error) {
            console.error('Error al llamar al servidor:', error);
            return;
        }
        callback(response);
    });
}

// Método para GuardarPrestamo
function guardarPrestamo(prestamo, callback) {
    client.GuardarPrestamo(prestamo, (error, response) => {
        if (error) {
            console.error('Error al llamar al servidor:', error);
            return;
        }
        callback(response);
    });
}

// Método para ActualizarPrestamo
function actualizarPrestamo(id, prestamo, callback) {
    client.ActualizarPrestamo({ id: id, prestamo: prestamo }, (error, response) => {
        if (error) {
            console.error('Error al llamar al servidor:', error);
            return;
        }
        callback(response);
    });
}

// Método para EliminarPrestamo
function eliminarPrestamo(id, callback) {
    client.EliminarPrestamo({ id: id }, (error, response) => {
        if (error) {
            console.error('Error al llamar al servidor:', error);
            return;
        }
        callback(response);
    });
}

// Casos de uso
obtenerTodos(response => console.log('Todos los préstamos:', response));
obtenerPorId(1, response => console.log('Préstamo recibido:', response));
obtenerPrestamosPorCliente(1, response => console.log('Préstamos por cliente:', response));
obtenerPrestamosPagados(response => console.log('Préstamos pagados:', response));
obtenerPrestamosNoPagados(response => console.log('Préstamos no pagados:', response));
guardarPrestamo({
    montoPrestamo: 6000, interes: 2.8, cuotas: 10, fechainicio: '2024-09-01', balance: 4000, idCliente: 3, pagado: false
}, response => console.log('Préstamo guardado:', response));
actualizarPrestamo(1, {
    montoPrestamo: 5500, interes: 2.7, cuotas: 12, fechainicio: '2024-02-01', balance: 2500, idCliente: 1, pagado: true
}, response => console.log('Préstamo actualizado:', response));
obtenerTodos(response => console.log('Todos los préstamos:', response));
eliminarPrestamo(3, response => console.log('Préstamo eliminado:', response));
