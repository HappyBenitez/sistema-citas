const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para aceptar JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido al sistema de gestión de citas!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.use(express.static('public'));
