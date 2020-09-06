import React from 'react';
import { Link } from "react-router-dom";

import Movie from './Movie';
import ModalSuppression from "./Validation/ModalSuppression"

import './Movies.css';

// Gestion de la liste des films
const Movies = (props) => {
    return (
        <section className="list-movies">
            <h1>Ma bibliothèque de films</h1>
            <div>
                {props.movies.length > 0 ? props.movies.map(function (movie, index) {
                    return (
                        <Movie movie={movie} key={index} openModal={props.openModal} />
                    )
                }) : <div className="no-film-found">
                        <h2>Notre bibliothèque est vide !</h2>
                        <Link to="/ajouter" className="btn btn-primary">Ajouter un film</Link>
                    </div>
                }
            </div>
            <ModalSuppression modalIsOpen={props.modalIsOpen} deleteMovie={props.deleteMovie} closeModal={props.closeModal} />
        </section>
    );
};

export default Movies;
