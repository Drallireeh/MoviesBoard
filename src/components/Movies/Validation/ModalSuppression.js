import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

function ModalSuppression(props) {
    console.log("MODA : ", props)

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            style={customStyles}
        >
            <p>Êtes vous sûrs de vouloir supprimer ce film ?</p>
            <button onClick={(e) => props.deleteMovie(props.movie)}>Oui</button>
            <button onClick={props.closeModal}>Non</button>
        </Modal>
    );
}

export default ModalSuppression;
