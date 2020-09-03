import React from 'react';
import { useParams } from 'react-router-dom';
import "./Details.css"

const Details = (props) => {
    let id = useParams();
    console.log("proppppps : ", props)
    let movie = props.movies.filter(movie => movie.id === Number(id.id))[0];

    console.log(movie);
    return (
        <section className="details-section">
            {movie !== undefined &&
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
                </div>
                // :
                // <section className="detailedErrorCtnr">
                //     <h1 className="detailedError">Ce film n'est pas dans votre bibliothèque</h1>
                // </section>
            }
        </section>
    )
}
export default Details;