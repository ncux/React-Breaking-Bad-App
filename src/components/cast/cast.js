import React from 'react';
import classes from './cast.module.css';
import Loading from "../loading/loading";
import { CastMember } from "./cast_member/cast_member";

export const Cast = ({ loading, characters }) => {

    const showCharacters = (
        <section className={`${classes.cards}`}>
            {
                characters.map(character => {
                    return (
                            <CastMember key={character.id} character={ character } />
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

