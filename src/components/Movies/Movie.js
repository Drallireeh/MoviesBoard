import React from 'react';
import './Movies.css';

const Movie = (props) => {
	return (
		<div className="movie-cnt col-md-4 col-sm-12">
            <h2>{props.movie.title}</h2>
			<img className="wrapper" src={props.movie.poster !== "" ? props.movie.poster : props.movie.backdrop}/>
            <p>{props.movie.description}</p>
            <span>Sortit le {props.movie.release_date}</span>
            <div>
                <button className="btn btn-success">Ajouter</button>
                <button className="btn btn-danger">Supprimer</button>
            </div>
		</div>
	);
};

export default Movie;
