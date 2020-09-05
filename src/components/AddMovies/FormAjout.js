import React from 'react';
import FormMovie from '../Formulaires/FormMovie';
import axios from 'axios';

const FormAjout = (props) => {
    const onSubmit = (event, datas) => {
        event.preventDefault();
            console.log("new movies : ", datas);
            axios.post("http://localhost:3000/movies", datas).then(res => {
            let new_movies = props.movies.concat(res.data);
            console.log("new movies : ", new_movies);
            props.setMovies(new_movies);
        }).catch(err => alert(err))
    }

    return (
        <FormMovie movie={props.movie} onSubmit={onSubmit} setMovieToAdd={props.setMovieToAdd}/>
    );
};

export default FormAjout;
