"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMovies;

var _movies = _interopRequireDefault(require("../../actions/movies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getMovies(ctx) {
  const movies_list = _movies.default.moviesList(); // console.log(movies_list)


  if (movies_list.length === 0) {
    // CASO DE ERROR
    ctx.status = 404;
    ctx.body = {
      status: ctx.status,
      message: "ERROR, NOT FOUND"
    };
  } else {
    ctx.status = 200;
    ctx.body = movies_list;
  }
}