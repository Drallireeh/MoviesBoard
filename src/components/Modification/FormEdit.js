import React from 'react';
import FormMovie from '../Formulaires/FormMovie';
import axios from 'axios';

const FormEdit = (props) => {
    console.log("Jsuis la props : ", props)
    
    let movie = props.movie;

    const onSubmit = (event, datas) => {
        event.preventDefault();
        axios.put("http://localhost:3000/movies/" + movie.id, datas).then(res => {
            console.log(res);

            let movies = props.movies.map(function (el) {
                return el.id === movie.id ? el = res.data : el;
            });
            props.setMovies(movies);

        }).catch(err => alert(err))
    }

    return (
        <section>
            {movie !== undefined ? <FormMovie movie={movie} onSubmit={onSubmit} setMovieToAdd={props.setMovieToAdd}/> :
                <h1>Ce film n'existe pas dans votre base de données</h1>}
        </section>
    );
};

export default FormEdit;
