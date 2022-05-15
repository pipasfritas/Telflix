"use strict";

var _movies = _interopRequireDefault(require("../data/movies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const movies_data = movies.getMovies();
exports.moviesList = () => {
  let movies_list = _movies.default.getMovies();

  if (movies_list.length === 0) {
    return undefined;
  }

  return movies_list;
};