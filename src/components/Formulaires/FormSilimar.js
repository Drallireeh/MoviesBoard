import React from 'react';

const FormSimilar = (props) => {
    let similar = props.similar_movie;
    let index = props.index;
    const url_photo = "http://image.tmdb.org/t/p/w185";

    return (
        <div className="row">
            <div className="form-group col-md-4">
                <label htmlFor={`title${index}`}>Titre du film</label>
                <input required type="text" className="form-control" name="title" id={`title${index}`} onChange={(event) => props.onUpdateSimilarMovies(event, index)} defaultValue={similar.title} placeholder="Titre du film" />
            </div>

            <div className="form-group col-md-4">
                <label htmlFor={`poster-similar${index}`}>Affiche</label>
                <input type="url" className="form-control" name="poster" id={`poster-similar${index}`} pattern="https?://.+" onChange={(event) => props.onUpdateSimilarMovies(event, index)} defaultValue={similar.poster_path != null ? url_photo + similar.poster_path : similar.poster} placeholder="Format http:// ou https://" />
            </div>

            <div className="form-group col-md-4">
                <label htmlFor={`release_similar${index}`}>Date de sortie</label>
                <input required className="form-control" type="date" name="release_date" id={`release_similar${index}`} onChange={(event) => props.onUpdateSimilarMovies(event, index)} defaultValue={similar.release_date} placeholder="Date au format jj-mm-aaaa" />
            </div>
        </div>
    );
};

export default FormSimilar;
