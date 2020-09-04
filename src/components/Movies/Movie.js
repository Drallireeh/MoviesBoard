import React from 'react';
import { Link } from "react-router-dom";

import NoImage from "../../img/no-image.png"

import './Movies.css';

const Movie = (props) => {
    const movie = props.movie;

    return (
        <div className="movie-cnt" to={"/" + movie.id}>
            <Link className="link-movie" to={"/" + movie.id}>
                <h2>{movie.title}</h2>
                <div className="img-ctn">
                    <img onError={(e) => {
                        e.target.src = NoImage;
                    }} src={movie.poster !== "" ? movie.poster : ""} />
                </div>
                <p>{movie.description}</p>
                <span>Sorti le {movie.release_date}</span>
            </Link>
            <div>
                <Link className="btn btn-success" to={"/" + movie.id + "/modifier"}>Modifier</Link>
                <button className="btn btn-danger" onClick={(e) => props.openModal(movie)}>Supprimer</button>
            </div>
        </div>
    );
};

export default Movie;
