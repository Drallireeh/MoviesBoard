import React, { useState, useEffect } from 'react';
import FormActor from './FormActors';
import FormSimilar from './FormSilimar';
import { Link, Redirect } from "react-router-dom";

const FormMovie = (props) => {
    console.log("je suis dans la modif : ", props);

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
    const [hasFormValues, setHasFormValues] = useState(false);

    const [redirectTo, setRedirectTo] = useState('');

    console.log("add movie final form : ", props)
    const movieInfo = props.movie;

    useEffect(() => {
        if (movieInfo) {
            let actors = [];
            movieInfo.actors.map(actor => {
                actors.push({
                    name: actor.name,
                    photo: `http://image.tmdb.org/t/p/w185${actor.profile_path !== undefined ? actor.profile_path : actor.photo}`,
                    character: actor.character
                })
            })
            let similar_movies = [];
            movieInfo.similar_movies.map(movie => {
                similar_movies.push({
                    title: movie.title,
                    poster: `http://image.tmdb.org/t/p/w185${movieInfo.poster_path !== undefined ? movieInfo.poster_path : movieInfo.poster}`,
                    release_date: movie.release_date
                })
            })
            let datas = {
                title: movieInfo.title,
                poster: `${movieInfo.poster_path !== undefined ? "http://image.tmdb.org/t/p/w185" + movieInfo.poster_path : movieInfo.poster}`,
                backdrop: `${movieInfo.backdrop_path !== undefined ? "http://image.tmdb.org/t/p/w185" + movieInfo.backdrop_path : movieInfo.backdrop}`,
                categories: movieInfo.categories,
                release_date: movieInfo.release_date,
                description: movieInfo.overview ? movieInfo.overview : movieInfo.description,
                similar_movies: similar_movies,
                actors: actors
            }
            setFormValues(datas);
            setHasFormValues(true);
        }
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
            {redirectTo.length > 0 ? <Redirect to={redirectTo}></Redirect> : ""}
            {hasFormValues &&
                <form onSubmit={(e) => {
                    props.onSubmit(e, formValues)
                    setRedirectTo("/");
                }}>

                    <label htmlFor="title">Titre</label>
                    <input required type="text" name="title" id="title" onChange={onUpdateData} defaultValue={formValues.title} placeholder="Titre du film" />

                    <label htmlFor="poster">Affiche du film</label>
                    <input required type="url" name="poster" id="poster" onChange={onUpdateData} pattern="https?://.+" defaultValue={formValues.poster} placeholder="format : http:// ou https://" />

                    <label htmlFor="categories">Catégories</label>
                    <input required type="text" name="categories" id="categories" onChange={onUpdateCategories} defaultValue={formValues.categories.join(", ")} placeholder="Séparer les catégories par des ','" />

                    <label htmlFor="date">Date de sortie</label>
                    <input required type="date" name="date" id="date" onChange={onUpdateData} defaultValue={formValues.release_date} placeholder="Date au format jj-mm-aaaa" />

                    <label htmlFor="description">Description</label>
                    <textarea required type="text" name="description" id="description" onChange={onUpdateData} defaultValue={formValues.description} placeholder="Description" />

                    <div>
                        <h3>Acteurs</h3>
                        <button className="btn btn-primary" onClick={(e) => {
                            e.preventDefault()
                            setHasNewActor(true);
                        }}>Ajouter un acteur</button>

                        {movieInfo.actors.map(function (actor, index) {
                            return (
                                <FormActor actor={actor} key={index} index={index} onUpdateActors={onUpdateActors} />
                            );
                        })}
                        {/* {hasNewActor ? <FormActor actor={""} key={props.actors.length} index={props.actors.length} onUpdateActors={onUpdateActors} /> : ""} */}
                    </div>

                    <div>
                        <h3>Films similaires</h3>
                        <button className="btn btn-primary">Ajouter un film similaire</button>

                        {formValues.similar_movies.map(function (similar_movie, index) {
                            return (
                                <FormSimilar similar_movie={similar_movie} key={index} index={index} onUpdateData={onUpdateData} onUpdateSimilarMovies={onUpdateSimilarMovies} />
                            );
                        })}
                    </div>

                    <input value="Confirmer" type="submit" className="submit btn btn-success"></input>
                </form>}
        </section>
    );
};

export default FormMovie;
