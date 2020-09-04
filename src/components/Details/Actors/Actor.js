import React from 'react';
import NoImage from "../../../img/no-image.png"

const Actor = (props) => {
    console.log("proppppps : ", props)
    let actor = props.actor;
    console.log(props.actor)
    let photo_url = actor.photo ? actor.photo : NoImage;

    return (
        <div className="details-card">
            <h4>{actor.name}</h4>
            <div>
                <img src={photo_url}></img>
            </div>
            <p>Personnage : {actor.character}</p>
        </div>
    )
}
export default Actor;