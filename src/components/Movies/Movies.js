import React from 'react';
import Movie from './Movie';
import './Movies.css';

const Movies = (props) => {

    console.log("props movies : ", props.movies)

    return (
        <section className="list-movies">
            <h1>Ma bibliothèque de films :</h1>
            {props.movies.length > 0 ? props.movies.map(function (movie, index) {
                return (
                    <Movie movie={movie} key={index} />
                )
            }) : <div>rien</div>}
        </section>
    );
};

export default Movies;
