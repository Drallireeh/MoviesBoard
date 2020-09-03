import React from 'react';
import Movie from './Movie';
import axios from 'axios';
import './Movies.css';

const Movies = (props) => {
    console.log("props movies tadam : ", props.movies)

    const deleteMovie = (movie) => {
        axios.delete("http://localhost:3000/movies/" + movie.id).then(res => {
            const movies = props.movies.filter(el => el.id !== movie.id)
            props.setMovies(movies);
        }).catch(err => alert(err));
    }

    return (
        <section className="list-movies">
            <h1>Ma bibliothèque de films :</h1>
            <div>
                {props.movies.length > 0 ? props.movies.map(function (movie, index) {
                    return (
                        <Movie movie={movie} key={index} deleteMovie={deleteMovie} />
                    )
                }) : <h2>Notre bibliothèque est vide</h2>}
            </div>
        </section>
    );
};

export default Movies;
