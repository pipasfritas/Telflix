import movies from '../../actions/movies'

export default function getMovies(ctx) {
    const movies_list = movies.moviesList();
    // console.log(movies_list)
    if (movies_list.length === 0) { // CASO DE ERROR
        ctx.status = 404
        ctx.body = {
            status: ctx.status,
            message: "ERROR, NOT FOUND"
        }
    } else {
        ctx.status = 200
        ctx.body = movies_list
    }
}