import React from 'react';
import './AddMovies.css';

const SearchMovie = (props) => {
    return (
        <form onSubmit={(e) => props.startSearch(e)}>
            <label htmlFor="title">Titre</label>
            <input type="text" name="title" placeholder="Titre du film" onChange={(e) => props.handleChangeTitle(e)} />
            <label htmlFor="date">Date de sortie</label>
            <input type="text" name="date" placeholder="Date au format jj-mm-aaaa" onChange={(e) => props.handleChangeDate(e)} />
            <input value="Rechercher" type="submit" className="submit btn btn-primary"></input>
        </form>
    );
};

export default SearchMovie;
