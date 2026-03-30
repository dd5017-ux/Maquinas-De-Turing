const express = require('express');
const app = express();

// Usa el puerto definido en la variable de entorno o 3000 por defecto
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde Node.js!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});