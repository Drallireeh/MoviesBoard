import React from 'react';

import DateFormated from "../DateFormated";

import NoImage from "../../../img/no-image.png"

const SimilarMovie = (props) => {
    let movie = props.movie;
    let poster_url = movie.poster ? movie.poster : NoImage;

    return (
        <div className="details-card">
            <h4>{movie.title}</h4>
            <div>
                <img src={poster_url} alt={"Affiche du film " + movie.title}></img>
            </div>
            <p>Date de sortie <DateFormated date={movie.release_date} /></p>
        </div>
    )
}
export default SimilarMovie;