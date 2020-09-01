import React from 'react';
import MovieResult from './MovieResult';
// import './Movies.css';

const MoviesResult = (props) => {
    console.log("props : ", props)

    return (
        <section className="list-movies">
            {props.moviesSearch.length > 0 ? props.moviesSearch.map(function (movie, index) {
                return (
                    <MovieResult movie={movie} key={index} />
                )
            }) : <div></div>}
        </section>
    );
};

export default MoviesResult;
