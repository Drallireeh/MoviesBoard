import React, { useState, useEffect } from 'react';
import Movies from './components/Movies/Movies';
import axios from 'axios';
import './App.css';

function App() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:3000/movies`)
			.then(movie => {
				const moviesData = movie.data;
				console.log("RES : ", moviesData);
				setMovies(moviesData)
				// moviesData.map((mov) => (
				// ));
			});

			
		}, [])
		console.log("movies : ", movies)

	return (
		<div className="App">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">Navbar</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">Liste de films<span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Ajouter un film</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Modifier un film</a>
						</li>
					</ul>
				</div>
			</nav>

			<main>
				<Movies movies={movies}/>
			</main>
		</div>
	);
}

export default App;
