import React from 'react';
import './AddMovies.css';

const MovieResult = (props) => {
    console.log("props last : ", props)

    const img_url = props.movie.poster_path !== "" ? props.movie.poster_path : props.movie.backdrop_path;

    return (
        <div className="movie-cnt col-md-4 col-sm-12" to={"/" + props.movie.id}>
            <h2>{props.movie.title}</h2>
            <img className="wrapper" src={"http://image.tmdb.org/t/p/w185" + img_url} />
            <span>Sorti le {props.movie.release_date}</span>
            <button className="btn btn-success">Ajouter</button>
        </div>
    );
};

export default MovieResult;
