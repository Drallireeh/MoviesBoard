import React from 'react';

// Bouton permettant de supprimer une data (Acteur/Film similaire)
const RemoveDatas = (props) => {
    return (
        <button className="btn btn-danger" onClick={(e) => props.onClick(e)}>Supprimer</button>
    );
};

export default RemoveDatas;
