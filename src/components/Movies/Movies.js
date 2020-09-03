import React from 'react';
import Movie from './Movie';
import axios from 'axios';
import './Movies.css';

const Movies = (props) => {
    console.log("props movies : ", props.movies)

    const deleteMovie = (movie) => {
        axios.delete("http://localhost:3000/movies/" + movie.id).then(res => {
            console.log(res, " Le film a été supprimé");
            window.location.reload(false); // TODO à refaire
        }).catch(err => alert(err));
    }

    return (
        <section className="list-movies">
            <h1>Ma bibliothèque de films :</h1>
            {props.movies.length > 0 ? props.movies.map(function (movie, index) {
                return (
                    <Movie movie={movie} key={index} deleteMovie={deleteMovie} />
                )
            }) : <div>rien</div>}
        </section>
    );
};

export default Movies;
