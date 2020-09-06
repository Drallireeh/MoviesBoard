import React from 'react';

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
