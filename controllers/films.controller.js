const fetchFilm = require('../utils/fetchFilms');

// GET: busca la película en OMDb
const getFilm = async (req, res) => {
  try {
    const film = await fetchFilm(req.params.title);

    if (!film) {
      return res.status(404).json({ message: 'Film not found' });
    }

    res.status(200).json(film);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching film' });
  }
};

// POST, PUT y DELETE solo devuelven mensajes (la API no tiene esos endpoints)
const createFilm = (req, res) => {
  const { Title } = req.body;

  if (!Title) {
    return res.status(400).json({ message: 'Missing film data' });
  }

  res.status(200).json({ message: `Se ha guardado ${Title}` });
};

const updateFilm = (req, res) => {
  const { id, Title } = req.body;

  if (id === undefined || !Title) {
    return res.status(400).json({ message: 'Missing film data' });
  }

  res.status(200).json({ id, message: `Se ha actualizado ${Title}` });
};

const deleteFilm = (req, res) => {
  const { id } = req.body;

  if (id === undefined) {
    return res.status(400).json({ message: 'Missing film id' });
  }

  res.status(200).json({ id, message: `Se ha borrado la película con ID: ${id}` });
};

module.exports = { getFilm, createFilm, updateFilm, deleteFilm };