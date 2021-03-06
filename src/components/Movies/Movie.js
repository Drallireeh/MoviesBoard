import React from 'react';
import { Link } from "react-router-dom";

import NoImage from "../../img/no-image.png"

import ModifyButton from "./Buttons/ModifyButton";
import DeleteButton from "./Buttons/DeleteButton";
import DateFormated from "../DateFormated";

import './Movies.css';

// Affichage d'un film sous forme de card
const Movie = (props) => {
    const movie = props.movie;

    return (
        <div className="movie-cnt" to={"/" + movie.id}>
            <Link className="link-movie" to={"/movie/" + movie.id}>
                <h2>{movie.title}</h2>
                <div className="img-ctn">
                    <img onError={(e) => {
                        e.target.src = NoImage;
                    }} src={movie.poster !== "" ? movie.poster : ""} alt={"affiche du film" + movie.title} />
                </div>
                <p>{movie.description}</p>
                <span>Sorti le <DateFormated date={movie.release_date} /></span>
            </Link>
            <div>
                <ModifyButton movie={movie} />
                <DeleteButton movie={movie} openModal={props.openModal} />
            </div>
        </div>
    );
};

export default Movie;
