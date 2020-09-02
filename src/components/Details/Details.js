import React from 'react';
import { useParams } from 'react-router-dom';
import "./Details.css"

const Details = (props) => {
    let id = useParams();
    console.log("proppppps : ", props)
    let movie = props.movies.filter(movie => movie.id == id.id);

    console.log(movie);
    return (
        <section className="details-section">
            {movie.length > 0 &&
                <div>
                    <div>
                        <img src={movie[0].poster} />
                    </div>
                    <h1>{movie[0].title}</h1>
                    <h2>{movie[0].release_date}</h2>
                    <h3>{movie[0].categories.join(' / ')}</h3>
                    <p>{movie[0].description}</p>
                    <div>
                       <img src={movie[0].backdrop} />
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