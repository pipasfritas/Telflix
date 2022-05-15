import movies from '../data/movies'

const movies_data = movies.getMovies();

exports.searchById = (id) => {
    let response = []
    movies_data.forEach((element) => {
        if (element.id == id) {
            response.push(element)
        }
    })
    return response
}