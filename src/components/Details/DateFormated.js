import React from 'react';

// Formattage de date pour l'afficher en "français", c'est à dire de façon à ce que ce soit facilement lisible
const DateFormated = (props) => {
    let dateToDisplay;
    if (props !== undefined) {
        let dateArray = props.date.split("-");
        let date = new Date(dateArray[0], dateArray[1], dateArray[2])
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        let finalDate = date.toLocaleDateString("fr-FR", options);
        dateToDisplay = finalDate;
    }

    return (
        <span>{dateToDisplay}</span>
    );
};

export default DateFormated;
