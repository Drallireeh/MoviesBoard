import React from 'react';
// import './Movie.css';

const Movie = (props) => {
	return (
		<div className="card card full-image">
			{props.movie.id}
		</div>
	);
};

export default Movie;
