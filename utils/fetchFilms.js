require('dotenv').config();

// Busca una película por título en OMDb. Devuelve el objeto o null si no existe
const fetchFilm = async (title) => {
  const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${process.env.API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.Response === 'False') {
    return null;
  }

  return data;
};

module.exports = fetchFilm;