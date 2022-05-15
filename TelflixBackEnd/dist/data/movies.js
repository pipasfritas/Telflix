"use strict";

var _movies_json = _interopRequireDefault(require("./movies_json.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const movies = require('movies_json.json')
exports.getMovies = () => {
  const movie = [];
  let i = 0;

  _movies_json.default.forEach(element => {
    let obj = {};
    obj.id = i;
    obj.Release_Date = element.Release_Date;
    obj.Title = element.Title;
    obj.Overview = element.Overview;
    obj.Popularity = element.Popularity;
    obj.Vote_Count = element.Vote_Count;
    obj.Vote_Average = element.Vote_Average;
    obj.Original_Language = element.Original_Language;
    obj.Genre = element.Genre;
    obj.Poster_Url = element.Poster_Url;
    movie.push(obj);
    i += 1;
  });

  return movie;
};