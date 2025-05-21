const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para entender datos enviados en formularios
app.use(express.urlencoded({ extended: true }));

// Servir el archivo HTML cuando alguien visite la raíz "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para recibir los datos del formulario
app.post('/submit-cita', (req, res) => {
  const { nombre, fecha, hora } = req.body;
  // Por ahora solo respondemos con un mensaje simple
  res.send(`Gracias ${nombre}, tu cita para el ${fecha} a las ${hora} ha sido registrada.`);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

