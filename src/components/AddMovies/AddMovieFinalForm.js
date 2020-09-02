import React, { useState, useEffect } from 'react';
import './AddMovies.css';
import FormActor from './FormActors';
import FormSimilar from './FormSilimar';

const AddMovieFinalForm = (props) => {
    const [formValues, setFormValues] = useState({
        title: "",
        poster_path: "",
        categories: [],
        release_date: "",
        overview: "",
        similar_movies: []
    });
    const [actorValues, setActorsValues] = useState([{
        name: "",
        photo: "",
        character: "",
        id: 0
    }]);
    const [similarValues, setSimilarValues] = useState({
        title: "",
        poster_path: "",
        release_date: ""
    });

    console.log("add movie final form : ", props)
    const movieInfo = props.movie;

    useEffect(() => {
        setFormValues(movieInfo);
        setActorsValues(movieInfo.actors);
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

    const onUpdateActors = event => {
        const target = event.target,
            value = target.value,
            name = target.name;

        const data = { ...actorValues };
        data[name] = value;

        console.log(data)
        console.log(data[name])

        setActorsValues(data);

        // setFormValues(prevState => ({
        //     actors: prevState.actors.map((index) => {
        //       el => el.key === index? { ...el, status: 'done' }: el
        //     })
          
        //   }))
    }

    return (
        <section className="add-movie-cnt">
            <form onSubmit={(event) => {
                event.preventDefault();
                console.log(formValues)
            }}>
                <label htmlFor="title">Titre</label>
                <input required type="text" name="title" id="title" onChange={onUpdateData} defaultValue={formValues.title} placeholder="Titre du film" />

                <label htmlFor="poster">Affiche du film</label>
                <input required type="url" name="poster" id="poster" onChange={onUpdateData} pattern="https?://.+" defaultValue={formValues.poster_path !== null ? "http://image.tmdb.org/t/p/w185" + formValues.poster_path : ""} placeholder="format : http:// ou https://" />

                <label htmlFor="categories">Catégories</label>
                <input required type="text" name="categories" id="categories" onChange={onUpdateCategories} defaultValue={formValues.categories.join(", ")} placeholder="Séparer les catégories par des ','" />

                <label htmlFor="date">Date de sortie</label>
                <input required type="date" name="date" id="date" onChange={onUpdateData} defaultValue={formValues.release_date} placeholder="Date au format jj-mm-aaaa" />

                <label htmlFor="overview">Description</label>
                <textarea required type="text" name="overview" id="overview" onChange={onUpdateData} defaultValue={formValues.overview} placeholder="Description" />

                <div>
                    <h3>Acteurs</h3>
                    <button className="btn btn-primary">Ajouter un acteur</button>

                    {movieInfo.actors.map(function (actor, index) {
                        return (
                            <FormActor actor={actor} key={index} index={index} onUpdateActors={onUpdateActors} />
                        );
                    })}
                </div>

                <div>
                    <h3>Films similaires</h3>
                    <button className="btn btn-primary">Ajouter un film similaire</button>

                    {formValues.similar_movies.map(function (similar_movie, index) {
                        return (
                            <FormSimilar similar_movie={similar_movie} key={index} index={index} onUpdateData={onUpdateData} />
                        );
                    })}
                </div>

                <input value="Ajouter" type="submit" className="submit btn btn-primary"></input>
            </form>
        </section>
    );
};

export default AddMovieFinalForm;
