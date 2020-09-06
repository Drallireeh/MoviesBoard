import React, { useState } from 'react';
import SearchMovie from "./SearchMovie";
import MoviesResult from './Results/MoviesResult';
import FormAjout from './FormAjout';
import './AddMovies.css';
import axios from 'axios';

const AddMovies = (props) => {
    const base_url = "https://api.themoviedb.org/3/search/movie?";

    const [title, setTitle] = useState(null);
    const [date, setDate] = useState(null);

    const [moviesSearch, setMoviesSearch] = useState([]);

    const [movieToAdd, setMovieToAdd] = useState(null);
    const [isMovieToAdd, setIsMovieToAdd] = useState(false);

    // Ecoute le changement du champ de recherche sur le titre
    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    }
    
    // Ecoute le changement du champ de recherche sur la date
    const handleChangeDate = (event) => {
        setDate(event.target.value);
    }

    // Requête de recherche
    const startSearch = (event) => {
        event.preventDefault();
        axios.get(`${base_url}api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${title}&primary_release_year=${date}`)
            .then(res => {
                setMoviesSearch(res.data.results);
            })
            .catch(error => {
                alert(error);
            })
    }

    // Permet de récupérer toutes les informations du film que l'on souhaites ajouter
    const AddMovie = (id) => {
        const movie = moviesSearch.filter(movie => movie.id === id)[0];

        const requestActors = axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const requestSimilar = axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const requestDetails = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);

        // Les données requises pour l'ajout sont comprises dans différentes requêtes, d'où l'utilisation d'axios.all
        axios.all([requestActors, requestSimilar, requestDetails]).then(axios.spread((...res) => {
            const actors = res[0];
            const similar = res[1];
            const details = res[2];
            let genre = details.data.genres;
            let genreArray = genre.map(g => g.name);

            setMovieToAdd({ ...movie, actors: actors.data.cast.slice(0, 3), similar_movies: similar.data.results.slice(0, 3), categories: genreArray });
        })).catch(err => alert(err));

        setIsMovieToAdd(true);
    }

    return (
        <section className="add-movie-cnt col-md-12">
            {/* Tant qu'on a pas cliqué sur un film à ajouter, la recherche reste affichée */}
            {!isMovieToAdd && <SearchMovie startSearch={startSearch} handleChangeTitle={handleChangeTitle} handleChangeDate={handleChangeDate} />}

            {/* Si on a un film sélectionné, on affiche le forlulaire, sinon les résultats de la recherche */}
            {movieToAdd !== null && isMovieToAdd ? <FormAjout movie={movieToAdd} movies={props.movies} setMovies={props.setMovies} setMovieToAdd={setMovieToAdd} /> : <MoviesResult moviesSearch={moviesSearch} AddMovie={AddMovie} />}
        </section>
    );
};

export default AddMovies;
