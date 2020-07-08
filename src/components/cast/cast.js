import React from 'react';
import classes from './cast.module.css';
import Loading from "../loading/loading";

export const Cast = ({ loading, characters }) => {

    const showCharacters = (
        <section className={`${classes.cards}`}>
            {
                characters.map(character => {
                    return (
                        <div className={`${classes}`}>
                            { character.name }
                        </div>
                    )
                })
            }
        </section>
    );


    if(loading) return (<Loading />);

    return (
        <div className="">
            { showCharacters }
        </div>
    );

};

