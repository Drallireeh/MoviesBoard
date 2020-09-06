import React from 'react';
import FormMovie from '../Formulaires/FormMovie';
import axios from 'axios';

// Gestion du formulaire d'ajout
const FormAjout = (props) => {
    // Submit du formulaire d'ajout
    const onSubmit = (event, datas) => {
        event.preventDefault();
        axios.post("http://localhost:3000/movies", datas).then(res => {
            let new_movies = props.movies.concat(res.data);
            props.setMovies(new_movies);
        }).catch(err => alert(err))
    }

    return (
        <FormMovie movie={props.movie} onSubmit={onSubmit} setMovieToAdd={props.setMovieToAdd} />
    );
};

export default FormAjout;
