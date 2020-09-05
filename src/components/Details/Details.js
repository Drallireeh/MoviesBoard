import React from 'react';
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
    console.log("proppppps : ", props)
    let movie = props.movies.filter(movie => movie.id === Number(id.id))[0];

    console.log("movie in details : ", movie);
    return (
        <section className="details-section">
            {movie !== undefined ?
                <div>
                    <div>
                        <img src={movie.poster}  alt={"poster du film " + movie.title}/>
                    </div>
                    <h1>{movie.title}</h1>
                    <h2>{movie.release_date}</h2>
                    <h3>{movie.categories.join(' / ')}</h3>
                    <p>{movie.description}</p>
                    <div>
                        <img src={movie.backdrop === "http://image.tmdb.org/t/p/w185null" ? noImage : movie.backdrop} alt={"affiche secondaire du film " + movie.title}/>
                    </div>
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