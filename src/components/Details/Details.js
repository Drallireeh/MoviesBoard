import React from 'react';
import { useParams } from 'react-router-dom';

const DetailedMovie = (props) => {
    let id = useParams();
    console.log("proppppps : ", props)
    let detailedMovie = props.movies.filter(movie => movie.id == id.id);

    console.log(detailedMovie);
    return (
        <article className="detailed">
            {detailedMovie.length > 0 &&
                <section className="detailedCtnr">
                    <img src={detailedMovie[0].poster} />
                    <h1 className="detailedTitle" >{detailedMovie[0].title}</h1>
                    <h2 className="detailedDate">{detailedMovie[0].release_date}</h2>
                    <h3 className="detailedCategories">{detailedMovie[0].categories.join(' / ')}</h3>
                    <p className="detailedDescription">{detailedMovie[0].description}</p>
                    <img src={detailedMovie[0].backdrop} />
                </section>
                // :
                // <section className="detailedErrorCtnr">
                //     <h1 className="detailedError">Ce film n'est pas dans votre bibliothèque</h1>
                // </section>
            }
        </article>
    )
}
export default DetailedMovie;