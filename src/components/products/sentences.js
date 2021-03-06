import React, { useState } from 'react';


export const Sentences = props => {

    const sentences = [
        "Thigh-high in the water, the fisherman’s hope for dinner soon turned to despair.",
        "He is good at eating pickles and telling women about his emotional problems.",
        "It's difficult to understand the lengths he'd go to remain short.",
        "If my calculator had a history, it would be more embarrassing than my browser history.",
        "He had a vague sense that trees gave birth to dinosaurs.",
        "Everyone says they love nature until they realize how dangerous she can be.",
        "Her daily goal was to improve on yesterday.",
        "Flying fish few by the space station.",
        "He used to get confused between soldiers and shoulders, but as a military man, he now soldiers responsibility.",
        "He barked orders at his daughters but they just stared back with amusement."
    ];


    const [textInput, setTextInput] = useState('');
    const [filteredSentences, setFilteredSentences] = useState(sentences);

    const filterSentences = textInput => {

        return setFilteredSentences(sentences.filter(sentence => sentence.includes(textInput)))


    };



    const showSentences = (
        filteredSentences.length > 0 && filteredSentences.map(sentence => (
            <p>{ sentence }</p>
        ))
    );

    return (
        <div className="">
            <form>
                <input type="text" onChange={event => filterSentences(event.target.value)} value={textInput} />
            </form>
            { showSentences }
        </div>
    );

};

