import React from 'react';
import NoImage from "../../../img/no-image.png"

const Actor = (props) => {
    let actor = props.actor;
    let photo_url = actor.photo === "http://image.tmdb.org/t/p/w185null" ? NoImage : actor.photo;

    return (
        <div className="details-card">
            <h4>{actor.name}</h4>
            <div>
                <img src={photo_url} alt={"photo de l'acteur " + actor.name}></img>
            </div>
            <p>Personnage : {actor.character}</p>
        </div>
    )
}
export default Actor;