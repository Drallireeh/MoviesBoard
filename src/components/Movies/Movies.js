import React from 'react';
import Movie from './Movie';

const Movies = (props) => {

    console.log("props movies : ", props.movies)

    return (
        <div>
            {props.movies.length > 0 ? props.movies.map(function (movie, index) {
                return (
                    <Movie movie={movie} key={index} />
                )
            }) : <div>rien</div>}
        </div>
    );
};

export default Movies;
