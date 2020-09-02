import React from 'react';
import './AddMovies.css';

const FormActor = (props) => {

    console.log("acteurs props : ", props)
    let actor = props.actor;
    let index = props.index;
    const url_photo = "http://image.tmdb.org/t/p/w185";

    return (
        <div>
            <label htmlFor={`name${index}`}>Nom de l'acteur</label>
            <input required type="text" name={`name${index}`} id={`name${index}`} onChange={props.onUpdateData} defaultValue={actor.name} placeholder="Nom de l'acteur" />
    
            <label htmlFor={`photo${index}`}>Photo</label>
            <input required type="url" name={`photo${index}`} id={`photo${index}`} onChange={props.onUpdateData} pattern="https?://.+" defaultValue={actor.profile_path !== null ? url_photo + actor.profile_path : ""} placeholder="Format http:// ou https://" />
    
            <label htmlFor={`character${index}`}>Personnage</label>
            <input required type="text" name={`character${index}`} id={`character${index}`} onChange={props.onUpdateData} defaultValue={actor.character} placeholder="Nom du personnage" />
        </div>
    );
};

export default FormActor;
