import './MainPageWrapper.css';

import { useEffect, useState } from 'react';
import { notes, scales, selectOptions } from '../../data/Notes';

import ShuffleButton from '../ShuffleButton';
import ClearButton from '../ClearButton';
import ToggleIntervalDisplay from '../ToggleIntervalDisplay';

function MainPageWrapper(props)
{
    const [randomNote, setRandomNote] = useState('A');
    const [notesSelected, setNotesSelected] = useState([]);
    const [correct, setCorrect] = useState(false);
    const [displayAnswer, setDisplayAnswer] = useState(false);
    const [displayIntervals, setDisplayIntervals] = useState(false);

    useEffect(() => {
        setRandomNote(getRandomNote());
    }, [])

    const getRandomNote = () => {
        return notes[Math.floor(Math.random() * notes.length)];
    }

    const newNote = () => {
        setRandomNote(getRandomNote());
        setNotesSelected([]);
        setDisplayAnswer(false);
    }

    const clearSelected = () => {
        setDisplayAnswer(false);
        setNotesSelected([]);
    }

    const noteSelectAction = (note) => {
        if(notesSelected.length === 7){
            return;
        }

        setDisplayAnswer(false);
        let notes = notesSelected;
        notes.push(note);
        setNotesSelected([...notes]);

        if(notesSelected.length === 7) {
            setDisplayAnswer(true);
            let scale = scales[props.selectedScale].key[randomNote];
            for(let i = 0; i < notesSelected.length; i++) {
                if(scale[i] !== notesSelected[i]) {
                    setCorrect(false);
                    return;
                }
            }

            setCorrect(true);
        }

    }

    const toggleIntervalDisplay = (toggle) => {
        setDisplayIntervals(toggle);
    }

    return (
        <div className="mainPage-wrapper">

            <ShuffleButton newRandomNote={newNote}/>
            <ClearButton clearSelected={clearSelected}/>
            <ToggleIntervalDisplay toggleIntervals={toggleIntervalDisplay}/>

            <div className={`interval-display ${ displayIntervals ? "" : "hide-answer"}`}>
                Intervals:<br />{scales[props.selectedScale].interval}
            </div>

            <h1 className="scale-title">{props.selectedScale} Scale</h1>

            <div className="note-selected-wrapper">
                <div className="note-selected">
                    {randomNote}
                </div>
            </div>

            <div className={`notes-selected ${ displayAnswer ? "" : "hide-answer"}`}>
                <span className={`answer ${correct ? "right" : "wrong"}`}>
                    {scales[props.selectedScale].key[randomNote].join(" - ")}
                </span>
            </div>

            <div className="notes-selected selected">
                {notesSelected.join(" - ")}
            </div>

            <div className="note-selection-options">
                <div className="grid-container">
                    { selectOptions.map((note, index) => {
                        return <div className="grid-item" key={index}>
                            <div className="note pointer-cursor" onClick={() => noteSelectAction(note)}>
                                {note}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default MainPageWrapper;