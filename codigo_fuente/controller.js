const productos = [
    {
        id: 1,
        nombre: 'Laptop',
        existencia: 15
    },
    {
        id: 2,
        nombre: 'Teclado',
        existencia: 30
    }
];

const obtenerProductos = (req, res) => {
    res.json(productos);
};

const buscarProducto = (req, res) => {
    const id = parseInt(req.params.id);

    const producto = productos.find(
        producto => producto.id === id
    );

    if (!producto) {
        return res.status(404).json({
            mensaje: 'Producto no encontrado'
        });
    }

    res.json(producto);
};

module.exports = {
    obtenerProductos,
    buscarProducto
};