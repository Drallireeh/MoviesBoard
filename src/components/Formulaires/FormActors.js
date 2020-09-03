import React from 'react';

const FormActor = (props) => {

    console.log("acteurs props : ", props)
    let actor = props.actor;
    let index = props.index;
    const url_photo = "http://image.tmdb.org/t/p/w185";

    return (
        <div>
            <label htmlFor={`name${index}`}>Nom de l'acteur</label>
            <input required type="text" name="name" id={`name${index}`} onChange={(e) => props.onUpdateActors(e, index)} defaultValue={actor.name} placeholder="Nom de l'acteur" />
    
            <label htmlFor={`photo${index}`}>Photo</label>
            <input required type="url" name="photo" id={`photo${index}`} onChange={(e) => props.onUpdateActors(e, index)} pattern="https?://.+" defaultValue={actor.profile_path !== null ? url_photo + actor.profile_path : ""} placeholder="Format http:// ou https://" />
    
            <label htmlFor={`character${index}`}>Personnage</label>
            <input required type="text" name="character" id={`character${index}`} onChange={(e) => props.onUpdateActors(e, index)} defaultValue={actor.character} placeholder="Nom du personnage" />
        </div>
    );
};

export default FormActor;