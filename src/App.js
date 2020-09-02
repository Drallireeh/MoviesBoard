import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Movies from './components/Movies/Movies';
import AddMovies from './components/AddMovies/AddMovies';
import Details from './components/Details/Details';
import axios from 'axios';
import './App.css';

function App() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:3000/movies`)
			.then(movie => {
				const moviesData = movie.data;
				setMovies(moviesData)
			})
			.catch(error => {
				alert(error)
			});
	}, []);

	return (
		<Router>
			<div className="App">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="#">Navbar</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<Link className="nav-link" to="/">Liste de films<span className="sr-only">(current)</span></Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/add">Ajouter un film</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/modify">Modifier un film</Link>
							</li>
						</ul>
					</div>
				</nav>

				<main>
					<Route exact path="/"><Movies movies={movies} /></Route>
					<Route exact path="/add"><AddMovies /></Route>
					<Route exact path="/:id"><Details movies={movies}/></Route>
				</main>
			</div>
		</Router>
	);
}

export default App;
