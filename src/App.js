import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Modal from 'react-modal';
import axios from 'axios';

import Movies from './components/Movies/Movies';
import Details from './components/Details/Details';
import AddMovies from './components/AddMovies/AddMovies';
import FormEdit from './components/Modification/FormEdit';

import './App.css';

Modal.setAppElement('#root')

function App() {
	const [movies, setMovies] = useState([]);

	const [modalIsOpen, setIsOpen] = useState(false);

	const [movieToDelete, setMovieToDelete] = useState(null);

	const deleteMovie = () => {
		console.log("delete movie : ", movieToDelete);
        axios.delete("http://localhost:3000/movies/" + movieToDelete.id).then(res => {
			console.log(res);
            const movies_to_keep = movies.filter(el => el.id !== movieToDelete.id)
			setMovies(movies_to_keep);
			closeModal();
        }).catch(err => alert(err));
    }

	function openModal(movie) {
		setMovieToDelete(movie);
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
		setMovieToDelete(null);
	}

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
					<Link className="navbar-brand" to="/">Moviiies</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<Link className="nav-link" to="/">Liste de films<span className="sr-only">(current)</span></Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/ajouter">Ajouter un film</Link>
							</li>
						</ul>
					</div>
				</nav>

				<main>
					<Route exact path="/"><Movies movies={movies} setMovies={setMovies} modalIsOpen={modalIsOpen} openModal={openModal} deleteMovie={deleteMovie} closeModal={closeModal}/></Route>
					<Route exact path="/ajouter"><AddMovies movies={movies} setMovies={setMovies} /></Route>
					<Route exact path="/:id"><Details movies={movies} /></Route>
					<Route exact path="/:id/modifier"><FormEdit movies={movies} setMovies={setMovies} /></Route>
				</main>
			</div>
		</Router>
	);
}

export default App;
