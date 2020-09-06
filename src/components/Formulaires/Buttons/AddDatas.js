import React from 'react';

// Bouton permettant d'ajouter une data (Acteur/Film similaire)
const AddDatas = (props) => {
    return (
        <button className="btn btn-primary" onClick={(e) => props.onClick(e)}>Ajouter</button>
    );
};

export default AddDatas;
