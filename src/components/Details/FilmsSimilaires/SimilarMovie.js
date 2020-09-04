import React from 'react';
import NoImage from "../../../img/no-image.png"

const SimilarMovie = (props) => {
    let movie = props.movie;
    console.log("similar movie : ", props)

    let photo_url = movie.poster ? movie.poster : NoImage;

    return (
        <div className="details-card">
            <h3>{movie.title}</h3>
            <div>
                <img src={photo_url}></img>
            </div>
            <p>Date de sortie {movie.release_date}</p>
        </div>
    )
}
export default SimilarMovie;