"use strict";

var _movies = _interopRequireDefault(require("../data/movies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const movies_data = _movies.default.getMovies();

exports.searchById = id => {
  let response = [];
  movies_data.forEach(element => {
    if (element.id == id) {
      response.push(element);
    }
  });
  return response;
};