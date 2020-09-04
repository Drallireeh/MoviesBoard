import React from 'react';
import Actor from "./Actor";

const Actors = (props) => {
    let actors = props.actors;
    console.log("actors props : ", props)

    return (
        <div>
            <h3>Acteurs</h3>
            {actors.length > 0 ? actors.map(function (actor, index) {
                return (
                    <Actor actor={actor} key={index} />
                )
            }) : <h2>Pas d'acteur connus pour ce film</h2>}
        </div>
    )
}
export default Actors;