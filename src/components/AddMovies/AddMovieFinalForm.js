import React from 'react';
import './AddMovies.css';

const AddMovieFinalForm = (props) => {

    console.log("final : ", props)
    const movieInfo = props.movie[0];

    return (
        <section className="add-movie-cnt col-md-12">
            <form>
                <label htmlFor="title">Titre</label>
                <input required type="text" name="title" id="title" defaultValue={movieInfo.title} placeholder="Titre du film" />

                <label htmlFor="origin-title">Titre originnel</label>
                <input required type="text" name="origin-title" id="origin-title" defaultValue={movieInfo.original_title} placeholder="Titre originnel" />

                <label htmlFor="date">Date de sortie</label>
                <input required type="text" name="date" id="date" defaultValue={movieInfo.release_date} placeholder="Date au format jj-mm-aaaa" />

                <label htmlFor="langue">Langue d'origine</label>
                <input required type="text" name="langue" id="langue" defaultValue={movieInfo.original_language} placeholder="Langue" />

                <label htmlFor="overview">Description</label>
                <textarea required type="text" name="overview" id="overview" defaultValue={movieInfo.overview} placeholder="Description" />

                <input type="submit" className="submit btn btn-primary"></input>
            </form>
        </section>
    );
};

export default AddMovieFinalForm;
