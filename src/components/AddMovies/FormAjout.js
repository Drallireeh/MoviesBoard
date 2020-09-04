import React from 'react';
import FormMovie from '../Formulaires/FormMovie';
import axios from 'axios';

const FormAjout = (props) => {
    const onSubmit = (event, datas) => {
        event.preventDefault();
        axios.post("http://localhost:3000/movies", datas).then(res => {
            let new_movies = props.movies.concat(res.data);
            console.log(res.data.actors)
            props.setMovies(new_movies);
        }).catch(err => alert(err))
    }

    return (
        <FormMovie movie={props.movie} onSubmit={onSubmit}/>
    );
};

export default FormAjout;
