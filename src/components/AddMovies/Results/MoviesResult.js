import React from 'react';
import MovieResult from './MovieResult';

// Liste des films retournés par la requête de recherche
const MoviesResult = (props) => {
    return (
        <section className="list-movies">
            {props.moviesSearch.length > 0 ? props.moviesSearch.map(function (movie, index) {
                return (
                    <MovieResult movie={movie} key={index} AddMovie={props.AddMovie} />
                )
            }) : <h1>Pas de résultats</h1>}
        </section>
    );
};

export default MoviesResult;
