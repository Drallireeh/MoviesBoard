import React from 'react';

const RemoveDatas = (props) => {
    return (
        <button className="btn btn-danger" onClick={(e) => props.onClick(e)}>Supprimer</button>
    );
};

export default RemoveDatas;
