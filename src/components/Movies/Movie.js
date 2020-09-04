import React from 'react';
import './Movies.css';
import { Link } from "react-router-dom";
import NoImage from "../../img/no-image.png"

const Movie = (props) => {
    const movie = props.movie;

    return (
        <div className="movie-cnt" to={"/" + movie.id}>
            <Link className="link-movie" to={"/" + movie.id}>
                <h2>{movie.title}</h2>
                <div className="img-ctn">
                    <img onError={(e) => {
                        console.log("test")
                        e.target.src = NoImage;
                    }} src={movie.poster !== "" ? movie.poster : ""} />
                </div>
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
