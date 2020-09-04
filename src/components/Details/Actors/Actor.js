import React from 'react';
import NoImage from "../../../img/no-image.png"

const Actor = (props) => {
    console.log("proppppps : ", props)
    let actor = props.actor;
    console.log(props.actor)
    let photo_url = actor.photo ? actor.photo : NoImage;

    return (
        <div>
            <h3>{actor.name}</h3>
            <div>
                <img src={photo_url}></img>
            </div>
            <p>Nom du personnage : {actor.character}</p>
        </div>
    )
}
export default Actor;