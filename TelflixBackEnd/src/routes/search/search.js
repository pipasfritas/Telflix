import search from '../../actions/search'

export default function getSearch(ctx) {
    let id = ctx.params.id
    const movie = search.searchById(id);
    // console.log(movies_list)
    if (movie.length === 0) { // CASO DE ERROR
        ctx.status = 404
        ctx.body = {
            status: ctx.status,
            message: "ERROR, NOT FOUND"
        }
    } else {
        ctx.status = 200
        ctx.body = movie[0]
    }
}