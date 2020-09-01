import React from 'react';
import MovieResult from './MovieResult';
// import './Movies.css';

const MoviesResult = (props) => {
    console.log("props : ", props)

    return (
        <section className="list-movies">
            {props.moviesSearch.map(function (movie, index) {
                return (
                    <MovieResult movie={movie} key={index} AddMovie={props.AddMovie} />
                )
            })}
        </section>
    );
};

export default MoviesResult;
