"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSearch;

var _search = _interopRequireDefault(require("../../actions/search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSearch(ctx) {
  let id = ctx.params.id;

  const movie = _search.default.searchById(id); // console.log(movies_list)


  if (movie.length === 0) {
    // CASO DE ERROR
    ctx.status = 404;
    ctx.body = {
      status: ctx.status,
      message: "ERROR, NOT FOUND"
    };
  } else {
    ctx.status = 200;
    ctx.body = movie[0];
  }
}