"use strict";

var _movies = _interopRequireDefault(require("../data/movies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const movies_data = _movies.default.getMovies();

let Favoritos = [];

exports.moviesList = () => {
  let movies_list = _movies.default.getMovies();

  if (movies_list.length === 0) {
    return undefined;
  }

  return movies_list;
};

exports.searchById = search => {
  let response = [];
  movies_data.forEach(element => {
    if (element.id == search) {
      response.push(element);
    }
  });
  return response;
};

exports.fav = id => {
  movies_data.forEach(element => {
    if (element.id == id) {
      Favoritos.push(element.title);
      console.log("Se agrego a favoritos la pelicula: " + element.title);
    }
  });
  return Favoritos;
};