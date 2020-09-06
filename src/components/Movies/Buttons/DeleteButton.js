import React from 'react';

import '../Movies.css';

// Bouton de suppression d'un film
const DeleteButton = (props) => {
    const movie = props.movie;

    return (
        <div>
            <button className="btn btn-danger" onClick={(e) => props.openModal(movie)}>Supprimer</button>
        </div>
    );
};

export default DeleteButton;
