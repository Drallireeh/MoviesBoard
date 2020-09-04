import React from 'react';
import { useParams } from 'react-router-dom';
import Actors from "./Actors/Actors"
import "./Details.css"
import SimilarMovies from './FilmsSimilaires/SimilarMovies';

const Details = (props) => {
    let id = useParams();
    console.log("proppppps : ", props)
    let movie = props.movies.filter(movie => movie.id === Number(id.id))[0];

    console.log("movie in details : ", movie);
    return (
        <section className="details-section">
            {movie !== undefined ?
                <div>
                    <div>
                        <img src={movie.poster} />
                    </div>
                    <h1>{movie.title}</h1>
                    <h2>{movie.release_date}</h2>
                    <h3>{movie.categories.join(' / ')}</h3>
                    <p>{movie.description}</p>
                    <div>
                       <img src={movie.backdrop} />
                    </div>
                    <Actors actors={movie.actors}/>
                    <SimilarMovies similar_movies={movie.similar_movies}/>
                </div>
                :
                <section>
                    <h1>Ce film n'est pas dans votre bibliothèque</h1>
                </section>
            }
        </section>
    )
}
export default Details;