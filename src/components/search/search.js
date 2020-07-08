import React, { useState } from 'react';
import classes from './search.module.css';

export const Search = ({ setQuery }) => {

    const [name, setName] = useState('');

    const onTextInput = value => {
        setName(value);
        setQuery(value);
    }

    return (
        <section className={`${classes.search}`}>
            <form>
                <input onChange={ event => onTextInput(event.target.value) }
                       value={ name }
                       type="text"
                       placeholder="Search for a character"
                       autoFocus
                />
            </form>
        </section>
    );

};

