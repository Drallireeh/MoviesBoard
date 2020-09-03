import React from 'react';
import './Movies.css';
import { Link } from "react-router-dom";

const Movie = (props) => {
    const movie = props.movie;
    
	return (
		<div className="movie-cnt col-md-4 col-sm-12" to={"/" + movie.id}>
            <Link className="link-movie" to={"/" + movie.id}>
                <h2>{movie.title}</h2>
                <img className="wrapper" src={movie.poster} />
                <p>{movie.description}</p>
                <span>Sorti le {movie.release_date}</span>
            </Link>
            <div>
                <Link className="btn btn-success" to={"/" + movie.id + "/modifier"}>Modifier</Link>
                <button className="btn btn-danger" onClick={(e) => props.deleteMovie(movie)}>Supprimer</button>
            </div>
		</div>
	);
};

export default Movie;
