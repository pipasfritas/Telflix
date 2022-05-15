import movies from '../data/movies'

//const movies_data = movies.getMovies();

exports.moviesList = () => {
    let movies_list = movies.getMovies()
    if (movies_list.length === 0) {
        return undefined
    }
    return movies_list
}