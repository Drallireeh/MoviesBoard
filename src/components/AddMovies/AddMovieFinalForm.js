import React from 'react';
import './AddMovies.css';

const AddMovieFinalForm = (props) => {

    console.log("final : ", props)
    const movieInfo = props.movie;

    return (
        <section className="add-movie-cnt">
            <form>
                <label htmlFor="title">Titre</label>
                <input required type="text" name="title" id="title" defaultValue={movieInfo.title} placeholder="Titre du film" />

                <label htmlFor="actors">Acteurs</label>
                <input required type="text" name="actors" id="actors" defaultValue={""} placeholder="Séparer les acteurs par des ','" />

                <label htmlFor="category">Catégories</label>
                <input required type="text" name="category" id="category" defaultValue={movieInfo.categories.join(", ")} placeholder="Séparer les catégories par des ','" />

                <label htmlFor="similar-movies">Films similaires</label>
                <input required type="text" name="similar-movies" id="similar-movies" defaultValue={""} placeholder="Séparer les films par des ','" />

                <label htmlFor="date">Date de sortie</label>
                <input required type="text" name="date" id="date" defaultValue={movieInfo.release_date} placeholder="Date au format jj-mm-aaaa" />

                <label htmlFor="overview">Description</label>
                <textarea required type="text" name="overview" id="overview" defaultValue={movieInfo.overview} placeholder="Description" />

                <label htmlFor="poster">Affiche du film</label>
                <input required type="url" name="poster" id="poster" pattern="https?://.+" defaultValue={movieInfo.poster_path !== null ? "http://image.tmdb.org/t/p/w185" + movieInfo.poster_path : ""} placeholder="format : http:// ou https://" />

                <input value="Ajouter" type="submit" className="submit btn btn-primary"></input>
            </form>
        </section>
    );
};

export default AddMovieFinalForm;
