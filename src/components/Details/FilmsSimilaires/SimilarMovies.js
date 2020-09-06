import React from 'react';
import SimilarMovie from "./SimilarMovie";

const SimilarMovies = (props) => {
    let movies = props.similar_movies;

    return (
        <div className="similar-movies-ctn">
            <h3>Films similaires</h3>
            <div className="details-card-list">

                {movies.length > 0 ? movies.map(function (movie, index) {
                    return (
                        <SimilarMovie movie={movie} key={index} />
                    )
                }) : <h2>Il n'y a pas de films similaires.</h2>}
            </div>
        </div>
    )
}
export default SimilarMovies;