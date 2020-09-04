import React from 'react';

const AddDatas = (props) => {
    return (
        <button className="btn btn-primary" onClick={(e) => props.onClick(e)}>Ajouter</button>
    );
};

export default AddDatas;
