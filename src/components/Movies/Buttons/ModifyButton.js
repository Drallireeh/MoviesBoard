import React from 'react';
import { Link } from "react-router-dom";

import '../Movies.css';

// Bouton de modification d'un film
const ModifyButton = (props) => {
    const movie = props.movie;

    return (
        <div>
            <Link className="btn btn-success" to={"/movie/modifier/" + movie.id}>Modifier</Link>
        </div>
    );
};

export default ModifyButton;
