import React from 'react';
import classes from './cast_member.module.css';

export const CastMember = ({ character }) => {

    const { name, img, portrayed, nickname, birthday, status } = character;

    return (
        <div className={`${classes.card}`}>
            <div className={`${classes.cardInner}`}>
                <div className={`${classes.cardFront}`}>
                    <img src={ img } alt={ name } />
                </div>
                <div className={`${classes.cardBack}`}>
                    <h1>{ name }</h1>
                    <ul>
                        <li>
                            <strong>Actor name:</strong> <span>{ portrayed }</span>
                        </li>
                        <li>
                            <strong>Nickname:</strong> <span>{ nickname }</span>
                        </li>
                        <li>
                            <strong>Birthday:</strong> <span>{ birthday }</span>
                        </li>
                        <li>
                            <strong>Status:</strong> <span>{ status }</span>
                        </li>
                    </ul>

                </div>

            </div>
        </div>
    );

};

