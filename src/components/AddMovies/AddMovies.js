import React, { useState } from 'react';
import MoviesResult from './MoviesResult';
import './AddMovies.css';
import axios from 'axios';

const AddMovies = () => {
    const api_key = "0afa2097e0c2ef64f9ce5f27c0e16c99";
    const base_url = "https://api.themoviedb.org/3/search/movie?";

    const [title, setTitle] = useState(null);
    const [date, setDate] = useState(null);
    const [moviesSearch, setMoviesSearch] = useState([]);

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleChangeDate = (event) => {
        setDate(event.target.value);
    }

    const StartSearch = (event) => {
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

    return (
        <section className="add-movie-cnt col-md-12">
            <form onSubmit={(e) => StartSearch(e)}>
                <label htmlFor="title">Titre</label>
                <input type="text" name="title" placeholder="Titre du film" onChange={(e) => handleChangeTitle(e)} />
                <label htmlFor="date">Date de sortie</label>
                <input type="text" name="date" placeholder="Date au format jj-mm-aaaa" onChange={(e) => handleChangeDate(e)} />
                <input type="submit" className="submit btn btn-primary"></input>
            </form>
                <MoviesResult moviesSearch={moviesSearch} />
        </section>
    );
};

export default AddMovies;
