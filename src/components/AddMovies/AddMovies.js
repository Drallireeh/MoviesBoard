import React, { useState } from 'react';
import MoviesResult from './MoviesResult';
import AddMovieFinalForm from './AddMovieFinalForm';
import SearchMovie from "./SearchMovie";
import './AddMovies.css';
import axios from 'axios';

const AddMovies = () => {
    const api_key = "0afa2097e0c2ef64f9ce5f27c0e16c99";
    const base_url = "https://api.themoviedb.org/3/search/movie?";

    const [title, setTitle] = useState(null);
    const [date, setDate] = useState(null);
    const [moviesSearch, setMoviesSearch] = useState([]);
    const [movieToAdd, setMovieToAdd] = useState(null);
    const [isMovieToAdd, setIsMovieToAdd] = useState(false);

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleChangeDate = (event) => {
        setDate(event.target.value);
    }

    const startSearch = (event) => {
        event.preventDefault();
        console.log(title, date)
        axios.get(`${base_url}api_key=${api_key}&query=${title}&primary_release_year=${date}`)
            .then(res => {
                console.log(res);
                setMoviesSearch(res.data.results);
            })
            .catch(error => {
                alert(error);
            })
    }

    const AddMovie = (id) => {
        const movie = moviesSearch.filter(movie => movie.id === id);

        setMovieToAdd(movie);
        setIsMovieToAdd(true);
    }

    return (
        <section className="add-movie-cnt col-md-12">
            {!isMovieToAdd && <SearchMovie startSearch={startSearch} handleChangeTitle={handleChangeTitle} handleChangeDate={handleChangeDate}/>}
            
            {movieToAdd !== null && isMovieToAdd ? <AddMovieFinalForm movie={movieToAdd}/> : <MoviesResult moviesSearch={moviesSearch} AddMovie={AddMovie} />}
        </section>
    );
};

export default AddMovies;
