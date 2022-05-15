import { useState, useEffect } from "react"
import axios from "axios"
import SpinnerLoader from "../components/Spinner"
import MoviesList from "../components/MoviesList"
import PopUpWindow from "../components/PopUpWindow"
import Fav from "../components/Fav"
import { createStore } from "redux"
import moviesReducer from "../reducer/reducer"

const store = createStore(moviesReducer)

function InfoPanel () {
    const [loaded, setDataLoaded] = useState(false)
    const [moviesData, setMoviesData] = useState([])
    const [moviesData2, setMoviesData2] = useState([])
    const [fav, setFav] = useState(false)
    const [favColor, setFavColor] = useState("dark")
    const [popUpState, setPopUpState] = useState(false)
    const [movieSelect, setMovieSelect] = useState ({
        "Release_Date": "2021-12-15",
        "Title": "Spider-Man: No Way Home",
        "Overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        "Popularity": 5083.954,
        "Vote_Count": 8940,
        "Vote_Average": 8.3,
        "Original_Language": "en",
        "Genre": "Action, Adventure, Science Fiction",
        "Poster_Url": "https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
    })

    const popUp = (movie) => {
        setPopUpState(true)
        setMovieSelect(movie)
    }

    const closePopUp = () => {
        setPopUpState(false)
    }

    const addMovie = (movie) => {
        if(store.getState().includes(movie)){
            store.dispatch({type: 'SUB', movie})
            alert(`Pelicula eliminada: ${movie.Title}`)
        }
        else{
            store.dispatch({ type: 'ADD', movie })
            alert(`Pelicula agregada: ${movie.Title}`)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            if (!loaded) {
                const result = await axios.get('http://localhost:4000/movies')
                if (result.data) {
                    setDataLoaded(true)
                    setMoviesData(result.data)
                    setMoviesData2(result.data)
                    console.log(result.data)
                }
            }
        }
        fetchData()
    })

    store.subscribe(() => {
        console.log(store.getState())
    })

    const listFav = () => {
        setFav(!fav)
        if(fav){
            setFavColor("light")
            setMoviesData2(moviesData)
            setMoviesData(store.getState())
        }
        else{
            setFavColor("dark")
            setMoviesData(moviesData2)
        }
    }
    if(!popUpState){
        return (
            <div className="App">
                <SpinnerLoader dataLoaded={loaded} />
                <Fav color={favColor} setF={listFav}/>
                <MoviesList movies={moviesData} popUp={popUp} />
            </div>
        )
    }
    else{
        return (
            <div className="App">
                <PopUpWindow movie={movieSelect} onAdd={addMovie} closePopUp={closePopUp}/>
            </div>
        )
    }
    
}

export default InfoPanel