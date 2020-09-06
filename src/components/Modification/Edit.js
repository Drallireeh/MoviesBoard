import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormEdit from './FormEdit';

// Gestion de toute la partie edit
const Edit = (props) => {
    let id = useParams();

    const [movieToAdd, setMovieToAdd] = useState(null);

    useEffect(() => {
        let movie = { ...props.movies.filter(movie => movie.id === Number(id.id))[0] };
        setMovieToAdd(movie);
    }, []);

    return (
        <section className="add-movie-cnt col-md-12">
            {movieToAdd !== null && <FormEdit movie={movieToAdd} movies={props.movies} setMovies={props.setMovies} setMovieToAdd={setMovieToAdd}/>}
        </section>
    );
};

export default Edit;
