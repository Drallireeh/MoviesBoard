import React from 'react';

const FormActor = (props) => {

    console.log("acteurs props : ", props)
    let actor = props.actor;
    let index = props.index;
    const url_photo = "http://image.tmdb.org/t/p/w185";

    return (
        <div className="row">
            <div className="form-group col-md-4 col-sm-12">
                <label htmlFor={`name${index}`}>Nom de l'acteur</label>
                <input required className="form-control" type="text" name="name" id={`name${index}`} onChange={(e) => props.onUpdateActors(e, index)} defaultValue={actor.name} placeholder="Nom de l'acteur" />
            </div>

            <div className="form-group col-md-4 col-sm-12">
                <label htmlFor={`photo${index}`}>Photo</label>
                <input type="url" name="photo" id={`photo${index}`} className="form-control" onChange={(e) => props.onUpdateActors(e, index)} pattern="https?://.+" defaultValue={actor.profile_path != null ? url_photo + actor.profile_path : actor.photo} placeholder="Format http:// ou https://" />
            </div>
            
            <div className="form-group col-md-4 col-sm-12">
                <label htmlFor={`character${index}`}>Personnage</label>
                <input required className="form-control" type="text" name="character" id={`character${index}`} onChange={(e) => props.onUpdateActors(e, index)} defaultValue={actor.character} placeholder="Nom du personnage" />
            </div>
        </div>
    );
};

export default FormActor;
