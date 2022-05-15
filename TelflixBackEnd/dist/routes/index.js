"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _inicio = _interopRequireDefault(require("./inicio/inicio"));

var _search = _interopRequireDefault(require("./search/search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _koaRouter.default();
router.get('/movies', _inicio.default);
router.get('/movies/:id', _search.default);
var _default = router;
exports.default = _default;