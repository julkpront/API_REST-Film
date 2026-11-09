const express = require('express');
const filmsController = require('../controllers/films.controller');

const router = express.Router();

// Todas cuelgan de /api/film (el prefijo se pone en app.js)
router.get('/:title', filmsController.getFilm);
router.post('/', filmsController.createFilm);
router.put('/', filmsController.updateFilm);
router.delete('/', filmsController.deleteFilm);

module.exports = router;