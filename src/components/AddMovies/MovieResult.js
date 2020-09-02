import React from 'react';
import './AddMovies.css';

const MovieResult = (props) => {
    console.log("props last : ", props)

    const img_url = props.movie.poster_path !== "" ? props.movie.poster_path : props.movie.backdrop_path;

    return (
        <div className="movie-result-cnt" to={"/" + props.movie.id}>
            <h2>{props.movie.title}</h2>
            <div>
                <img className="wrapper" src={"http://image.tmdb.org/t/p/w185" + img_url} />
            </div>
            <span>Sorti le {props.movie.release_date}</span>
            <button className="btn btn-success" onClick={() => props.AddMovie(props.movie.id)}>Ajouter</button>
        </div>
    );
};

export default MovieResult;
