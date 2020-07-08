import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cast } from "../cast/cast";
import { Search } from "../search/search";

const BREAKING_BAD_API = `https://www.breakingbadapi.com/api/`;

export const Characters = props => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');

    const getItems = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${BREAKING_BAD_API}characters?name=${query}`);
            setItems(data);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getItems();
    }, [query]);

    return (
        <div className="">
            <Search setQuery={ value => setQuery(value) } />
            <Cast loading={ loading } characters={ items } />
        </div>
    );

};

