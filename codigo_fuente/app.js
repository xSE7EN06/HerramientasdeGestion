const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        mensaje: 'Sistema de Gestión de Inventarios'
    });
});

app.get('/status', (req, res) => {
    res.json({
        estado: 'Activo',
        timestamp: new Date()
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});