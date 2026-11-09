require('dotenv').config();
const express = require('express');
const filmsRoutes = require('./routes/films.routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/film', filmsRoutes);

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error inesperado
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Necesario exportar app para que se puedan ejecutar los tests correctamente
module.exports = app;