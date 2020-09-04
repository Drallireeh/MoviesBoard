import React from 'react';

import '../Movies.css';

const DeleteButton = (props) => {
    const movie = props.movie;
    console.log("DELETE PROPS :", props)

    return (
        <div>
            <button className="btn btn-danger" onClick={(e) => props.openModal(movie)}>Supprimer</button>
        </div>
    );
};

export default DeleteButton;
