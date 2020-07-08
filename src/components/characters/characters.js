import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './characters.module.css';
import { Cast } from "../cast/cast";

const BREAKING_BAD_API = `https://www.breakingbadapi.com/api/`;

export const Characters = props => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const getItems = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${BREAKING_BAD_API}characters`);
            console.log(data);
            setItems(data);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getItems();
    }, []);

    return (
        <div className="">
            <Cast loading={ loading } characters={ items } />
        </div>
    );

};

