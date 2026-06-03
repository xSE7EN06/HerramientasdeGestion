function generarReporte(productos) {
    return {
        fecha: new Date(),
        totalProductos: productos.length,
        productos
    };
}

function calcularExistencias(productos) {
    return productos.reduce(
        (total, producto) => total + producto.existencia,
        0
    );
}

module.exports = {
    generarReporte,
    calcularExistencias
};