import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Actors from "./Actors/Actors"
import SimilarMovies from './FilmsSimilaires/SimilarMovies';
import ModifyButton from "../Movies/Buttons/ModifyButton";
import DeleteButton from "../Movies/Buttons/DeleteButton";
import ModalSuppression from "../Movies/Validation/ModalSuppression";

import noImage from "../../img/no-image.png";

import "./Details.css"

const Details = (props) => {
    let id = useParams();
    let movie = props.movies.filter(movie => movie.id === Number(id.id))[0];
    console.log("second : ", movie)

    let dateToDisplay;
        if (movie !== undefined) {
            let dateArray = movie.release_date.split("-");
            let date = new Date(dateArray[0], dateArray[1], dateArray[2])
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
            let finalDate = date.toLocaleDateString("fr-FR", options);
            dateToDisplay = finalDate;
        }
    
    console.log("movie in details : ", movie);
    return (
        <section className="details-section">
            {movie !== undefined ?
                <div>
                    {movie.backdrop !== "http://image.tmdb.org/t/p/originalnull" && <img className="backdrop" src={movie.backdrop} alt={"affiche secondaire du film " + movie.title} />}
                    <img className={movie.backdrop !== "http://image.tmdb.org/t/p/originalnull" ? "poster-img" : "poster-without-backdrop"} src={movie.poster === "http://image.tmdb.org/t/p/w185null" ? noImage : movie.poster} alt={"poster du film " + movie.title} />
                    <h1>{movie.title}</h1>
                    <h2>{dateToDisplay}</h2>
                    <h3>{movie.categories.join(' / ')}</h3>
                    <p>{movie.description}</p>
                    <Actors actors={movie.actors} />
                    <SimilarMovies similar_movies={movie.similar_movies} />
                    <div className="details-btn-ctn">
                        <ModifyButton movie={movie} />
                        <DeleteButton movie={movie} openModal={props.openModal} />
                    </div>
                    <ModalSuppression modalIsOpen={props.modalIsOpen} deleteMovie={props.deleteMovie} closeModal={props.closeModal} />
                </div>
                :
                <div>
                    <h1>Ce film n'est pas dans votre bibliothèque</h1>
                </div>
            }
        </section>
    )
}
export default Details;