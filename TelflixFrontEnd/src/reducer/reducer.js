/**
 * action:
 * {
 *  'type': 'ADD',
 *  'movie': {...}
 * }
 * @param {*} previousState 
 * @param {*} action 
 */
function moviesReducer (previousState = [], action) {
    switch (action.type) {
        case 'ADD':
            return [ ...previousState, action.movie ]
        case 'SUB':
            return previousState.filter((item) => item !== action.movie)
        default:
            return previousState
    }
}

export default moviesReducer