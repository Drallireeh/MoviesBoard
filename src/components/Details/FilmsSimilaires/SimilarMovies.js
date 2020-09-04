import React from 'react';
import SimilarMovie from "./SimilarMovie";

const SimilarMovies = (props) => {
    console.log("similar movies props : ", props)
    let movies = props.similar_movies;

    return (
        <div>
            <h3>Films similaires : </h3>
            {movies.length > 0 ? movies.map(function (movie, index) {
                return (
                    <SimilarMovie movie={movie} key={index} />
                )
            }) : <h2>Il n'y a pas de films similaires.</h2>}
        </div>
    )
}
export default SimilarMovies;