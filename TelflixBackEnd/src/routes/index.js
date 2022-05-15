import Router from 'koa-router'
import getMovies from './inicio/inicio'
import getSearch from './search/search'

const router = new Router()

router.get('/movies', getMovies)
router.get('/movies/:id', getSearch)

export default router