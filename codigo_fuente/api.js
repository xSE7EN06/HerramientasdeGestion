/**
 * Genera un reporte detallado de los productos
 * @param {Array} productos Lista de productos
 * @returns {Object} Reporte con la fecha, total y lista de productos
 */
function generarReporte(productos) {
    return {
        fecha: new Date(),
        totalProductos: productos.length,
        productos
    };
}

/**
 * Calcula el total de existencias sumando el inventario de todos los productos
 * @param {Array} productos Lista de productos
 * @returns {number} Suma total de existencias
 */
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