import React from 'react';
import './AddMovies.css';

const MovieResult = (props) => {
    console.log("props last : ", props)

    const img_url = props.movie.poster_path !== "" ? props.movie.poster_path : props.movie.backdrop_path;

    return (
        <div className="movie-result-cnt flex-column-center col-md-4 col-sm-12" to={"/" + props.movie.id}>
            <div className="flex-column-center col-md-11">
                <h2>{props.movie.title}</h2>
                <img className="wrapper" src={"http://image.tmdb.org/t/p/w185" + img_url} />
                <span>Sorti le {props.movie.release_date}</span>
                <button className="btn btn-success" onClick={() => props.AddMovie(props.movie.id)}>Ajouter</button>
            </div>
        </div>
    );
};

export default MovieResult;
