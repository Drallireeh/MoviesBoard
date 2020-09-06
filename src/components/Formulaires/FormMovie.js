import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";

import FormActor from './FormActors';
import FormSimilar from './FormSilimar';
import AddDatas from "./Buttons/AddDatas";
import RemoveDatas from "./Buttons/RemoveDatas";

// Formulaire d'ajout et de modification d'un film
const FormMovie = (props) => {
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
    const [hasFormValues, setHasFormValues] = useState(false);
    const [redirectTo, setRedirectTo] = useState('');

    const movieInfo = props.movie;
    const base_url = "http://image.tmdb.org/t/p/w185";

    useEffect(() => {
        // Initialisation de l'object représentant toutes les données à envoyer par la suite
        if (movieInfo && Object.keys(movieInfo).length !== 0) {
            let actors = [];
            movieInfo.actors.map(actor => {
                let actor_photo = actor.profile_path !== undefined ? base_url + actor.profile_path : actor.photo;
                actors.push({
                    name: actor.name,
                    photo: actor_photo,
                    character: actor.character
                });
            });
            let similar_movies = [];
            movieInfo.similar_movies.map(movie => {
                let movie_poster = movie.poster_path !== undefined ? base_url + movie.poster_path : movie.poster;
                similar_movies.push({
                    title: movie.title,
                    poster: movie_poster,
                    release_date: movie.release_date
                });
            });
            let datas = {
                title: movieInfo.title,
                poster: `${movieInfo.poster_path !== undefined ? base_url + movieInfo.poster_path : movieInfo.poster}`,
                backdrop: `${movieInfo.backdrop_path !== undefined ? "http://image.tmdb.org/t/p/original" + movieInfo.backdrop_path : movieInfo.backdrop}`,
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

    // On change sur les datas dites "normales" (les simples string par exemple)
    const onUpdateData = event => {
        const target = event.target,
            value = target.value,
            name = target.name;

        const data = { ...formValues };
        data[name] = value;
        setFormValues(data);
    };
    
    // On change les catégories
    const onUpdateCategories = event => {
        const target = event.target,
            value = target.value;

        let categories = value.split(", ");
        const data = { ...formValues };
        data["categories"] = categories;
        setFormValues(data);
    };

    // On change sur les acteurs
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
    
    // On change sur les films similaires
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

    // Permet l'ajout d'un acteur
    const AddActors = (e) => {
        e.preventDefault();

        let newMovieInfos = { ...formValues }
        newMovieInfos.actors.push({ name: "", photo: "", character: "" });
        newMovieInfos.id = movieInfo.id; // On doit garder l'id pour la modification (pareil dans les fonctions suivantes)

        props.setMovieToAdd({...newMovieInfos});
        delete newMovieInfos.id;
        setFormValues(newMovieInfos);
    }
    // Permet la suppression d'un acteur
    const removeActors = (e) => {
        e.preventDefault();

        let newMovieInfos = { ...formValues };
        newMovieInfos.actors.pop();
        newMovieInfos.id = movieInfo.id;
        
        props.setMovieToAdd({...newMovieInfos});
        delete newMovieInfos.id;
        setFormValues(newMovieInfos);
    }
    
    // Permet l'ajout d'un film similaire
    const AddSimilarMovies = (e) => {
        e.preventDefault();

        let newMovieInfos = { ...formValues };
        newMovieInfos.similar_movies.push({ title: "", poster: "", release_date: "" });
        newMovieInfos.id = movieInfo.id;

        props.setMovieToAdd({...newMovieInfos});
        delete newMovieInfos.id;
        setFormValues(newMovieInfos);
    }
    // Permet la suppression d'un film similaire
    const removeSimilarMovies = (e) => {
        e.preventDefault();

        let newMovieInfos = { ...formValues }
        newMovieInfos.similar_movies.pop();
        newMovieInfos.id = movieInfo.id;

        props.setMovieToAdd({...newMovieInfos});
        delete newMovieInfos.id;
        setFormValues(newMovieInfos);
    }

    return (
        <section className="add-movie-cnt">
            {redirectTo.length > 0 ? <Redirect to={redirectTo}></Redirect> : ""}
            {hasFormValues &&
                <form onSubmit={(e) => {
                    props.onSubmit(e, formValues);
                    setRedirectTo("/");
                }}>

                    <div className="form-row">
                        <div className="col">
                            <label htmlFor="title">Titre</label>
                            <input required className="form-control" type="text" name="title" id="title" onChange={onUpdateData} defaultValue={formValues.title} placeholder="Titre du film" />
                        </div>
                        <div className="col">
                            <label htmlFor="date">Date de sortie</label>
                            <input required type="date" className="form-control" name="release_date" id="date" onChange={onUpdateData} defaultValue={formValues.release_date} placeholder="Date au format jj-mm-aaaa" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col">
                            <label htmlFor="poster">Affiche du film</label>
                            <input type="url" className="form-control" name="poster" id="poster" onChange={onUpdateData} pattern="https?://.+" defaultValue={formValues.poster} placeholder="format : http:// ou https://" />
                        </div>
                        <div className="col">
                            <label htmlFor="categories">Catégories</label>
                            <input required type="text" className="form-control" name="categories" id="categories" onChange={onUpdateCategories} defaultValue={formValues.categories.join(", ")} placeholder="Séparer les catégories par des ','" />
                        </div>
                    </div>

                    <label htmlFor="description">Description</label>
                    <textarea required type="text" className="form-control" name="description" id="description" onChange={onUpdateData} defaultValue={formValues.description} placeholder="Description" />

                    {/* Liste des acteurs */}
                    <div>
                        <h2>Acteurs</h2>

                        <div className="btn-ctn">
                            <AddDatas onClick={AddActors} />
                            <RemoveDatas onClick={removeActors} />
                        </div>

                        {movieInfo.actors.length > 0 ? movieInfo.actors.map(function (actor, index) {
                            return (
                                <FormActor actor={actor} key={index} index={index} onUpdateActors={onUpdateActors} />
                            );
                        }) : <p>Pas d'acteurs connus</p>}
                    </div>

                    {/* Liste des films similaires */}
                    <div>
                        <h2>Films similaires</h2>

                        <div className="btn-ctn">
                            <AddDatas onClick={AddSimilarMovies} />
                            <RemoveDatas onClick={removeSimilarMovies} />
                        </div>

                        {movieInfo.similar_movies.length > 0 ? movieInfo.similar_movies.map(function (similar_movie, index) {
                            return (
                                <FormSimilar similar_movie={similar_movie} key={index} index={index} onUpdateData={onUpdateData} onUpdateSimilarMovies={onUpdateSimilarMovies} />
                            );
                        }) : <p>Pas de films similaires connus</p>}
                    </div>

                    <input value="Confirmer" type="submit" className="submit btn btn-success"></input>
                </form>}
        </section>
    );
};

export default FormMovie;
