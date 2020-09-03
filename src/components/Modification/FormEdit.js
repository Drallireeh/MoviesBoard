import React, { useState, useEffect } from 'react';
import FormMovie from './FormMovie';
import axios from 'axios';

const FormEdit = (props) => {
    const [formValues, setFormValues] = useState({
        title: "",
        poster_path: "",
        categories: [],
        release_date: "",
        overview: "",
        similar_movies: [{
            title: "",
            poster_path: "",
            release_date: ""
        }],
        actors: [{
            name: "",
            photo: "",
            character: ""
        }]
    });

    const [hasNewActor, setHasNewActor] = useState(false);

    console.log("add movie final form : ", props)
    const movieInfo = props.movie;

    useEffect(() => {
        let actors = [];
        movieInfo.actors.map(actor => {
            actors.push({
                name: actor.name,
                photo: `http://image.tmdb.org/t/p/w185${actor.profile_path}`,
                character: actor.character
            })
        })
        let similar_movies = [];
        movieInfo.similar_movies.map(movie => {
            similar_movies.push({
                title: movie.title,
                poster: `http://image.tmdb.org/t/p/w185${movie.poster_path}`,
                release_date: movie.release_date
            })
        })
        let datas = {
            title: movieInfo.title,
            poster: `http://image.tmdb.org/t/p/w185${movieInfo.poster_path}`,
            backdrop: `http://image.tmdb.org/t/p/w185${movieInfo.backdrop_path}`,
            categories: movieInfo.categories,
            release_date: movieInfo.release_date,
            description: movieInfo.overview,
            similar_movies: similar_movies,
            actors: actors
        }
        setFormValues(datas);
    }, []);

    const onUpdateData = event => {
        const target = event.target,
            value = target.value,
            name = target.name;

        const data = { ...formValues };
        data[name] = value;
        setFormValues(data);
    };

    const onUpdateCategories = event => {
        const target = event.target,
            value = target.value;

        let categories = value.split(", ");
        const data = { ...formValues };
        data["categories"] = categories;
        setFormValues(data);
    };

    const onUpdateActors = (event, index) => {
        const target = event.target,
            value = target.value,
            name = target.name;

        const data = { ...formValues };
        data["actors"].map(function (data, idx) {
            return idx === index ? data[name] = value : data;
        });
        setFormValues(data);
    }

    const onUpdateSimilarMovies = (event, index) => {
        const target = event.target,
            value = target.value,
            name = target.name;

        const data = { ...formValues };
        data["similar_movies"].map(function (data, idx) {
            return idx === index ? data[name] = value : data;
        });
        setFormValues(data);
    }

    return (
        <section className="add-movie-cnt">
            <form onSubmit={(event) => {
                event.preventDefault();
                console.log(formValues)
                // axios.post("http://localhost:3000/movies", formValues).then(res => {
                //     console.log(res);
                // }).catch(err => alert(err))
            }}>

                <FormMovie props={formValues} onUpdateData={onUpdateData} onUpdateCategories={onUpdateCategories} onUpdateActors={onUpdateActors} onUpdateSimilarMovies={onUpdateSimilarMovies} setHasNewActor={setHasNewActor}/>


                <input value="Ajouter" type="submit" className="submit btn btn-primary"></input>
            </form>
        </section>
    );
};

export default FormEdit;
