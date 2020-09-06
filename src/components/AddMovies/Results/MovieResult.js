import React from 'react';
import '../AddMovies.css';
import noImage from "../../../img/no-image.png"

const MovieResult = (props) => {
    const base_img_url = "http://image.tmdb.org/t/p/w185";
    const img_url = props.movie.poster_path !== "" && props.movie.poster_path !== null ? base_img_url + props.movie.poster_path : noImage;

    return (
        <div className="movie-result-cnt" to={"/" + props.movie.id}>
            <h2>{props.movie.title}</h2>
            <div>
                <img src={img_url} alt={"affiche du film" + props.movie.title} />
            </div>
            <span>{props.movie.release_date === "" || props.movie.release_date === undefined ? "Date inconnue" : "Sorti le " + props.movie.release_date}</span>
            <button className="btn btn-success" onClick={() => props.AddMovie(props.movie.id)}>Ajouter</button>
        </div>
    );
};

export default MovieResult;
