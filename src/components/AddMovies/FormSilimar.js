import React from 'react';
import './AddMovies.css';

const FormSimilar = (props) => {

    console.log("similar props : ", props)
    let similar = props.similar_movie;
    let index = props.index;
    const url_photo = "http://image.tmdb.org/t/p/w185";

    return (
        <div>
            <label htmlFor={`title-similar${index}`}>Titre du film</label>
            <input required type="text" name={`title-similar${index}`} id={`title-similar${index}`} onChange={props.onUpdateData} defaultValue={similar.title} placeholder="Nom de l'acteur" />
    
            <label htmlFor={`poster-similar${index}`}>Affiche</label>
            <input type="url" name={`poster-similar${index}`} id={`poster-similar${index}`} pattern="https?://.+" onChange={props.onUpdateData} defaultValue={similar.poster_path !== null ? url_photo + similar.poster_path : similar.backdrop_path} placeholder="Format http:// ou https://" />
    
            <label htmlFor={`release_similar${index}`}>Date de sortie</label>
            <input required type="date" name={`release_similar${index}`} id={`release_similar${index}`} onChange={props.onUpdateData} defaultValue={similar.release_date} placeholder="Nom du personnage" />
        </div>
    );
};

export default FormSimilar;
