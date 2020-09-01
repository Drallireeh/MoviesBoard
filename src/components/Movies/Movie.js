import React from 'react';
import './Movies.css';
import { Link } from "react-router-dom";

const Movie = (props) => {

    const movie = props.movie;

	return (
		<div className="movie-cnt col-md-4 col-sm-12" to={"/" + movie.id}>
            <Link className="link-movie" to={"/" + movie.id}>
                <h2>{movie.title}</h2>
                <img className="wrapper" src={movie.poster !== "" ? movie.poster : movie.backdrop} />
                <p>{movie.description}</p>
                <span>Sorti le {movie.release_date}</span>
            </Link>
            <div>
                <button className="btn btn-success">Modifier</button>
                <button className="btn btn-danger">Supprimer</button>
            </div>
		</div>
	);
};

export default Movie;
