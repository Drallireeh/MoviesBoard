import React from 'react';
import Movie from './Movie';
import ModalSuppression from "./Validation/ModalSuppression"
import './Movies.css';

const Movies = (props) => {
    console.log("props movies tadam : ", props.movies)

    return (
        <section className="list-movies">
            <h1>Ma bibliothèque de films :</h1>
            <div>
                {props.movies.length > 0 ? props.movies.map(function (movie, index) {
                    return (
                        <Movie movie={movie} key={index} openModal={props.openModal}/>
                    )
                }) : <h2>Notre bibliothèque est vide</h2>}
            </div>
			<ModalSuppression modalIsOpen={props.modalIsOpen} deleteMovie={props.deleteMovie} closeModal={props.closeModal}/>
        </section>
    );
};

export default Movies;
