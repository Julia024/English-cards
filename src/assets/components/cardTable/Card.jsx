import { useState } from "react"
import styles from "./card.module.css"

const Card = ({card, onSave, onDelete}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [english, setEnglish] = useState(card.english);
    const [transcription, setTranscription] = useState(card.transcription);
    const [russian, setRussian] = useState(card.russian);
    const [errorMessage, setErrorMessage] = useState("");

    const isInvalid = !english.trim() || !transcription.trim() || !russian.trim();

    const handleCancel = () => {
        setIsEditing(false);
        setEnglish(card.english);
        setTranscription(card.transcription)
        setRussian(card.russian)
    }

    const handleSave = () => {
        if(isInvalid) {
            setErrorMessage("All fields must be filled out!");
            return;
        }
        // setErrorMessage("");
        // if (isInvalid) return;

        const updatedCards = {
            ...card,
            english, 
            transcription, 
            russian
        }
        console.log("Saving card:", updatedCards);
        onSave(updatedCards)
        setIsEditing(false)
    }

    return (
        <div className={styles.card} >
            {isEditing ? (
                <>
                <input type="text" 
                value={english}
                onChange={((e) => setEnglish(e.target.value))}
                className={english.trim() === "" ? styles.errorInput : "" } />

                <input type="text"
                value={transcription}
                onChange={((e) => setTranscription(e.target.value))}
                className={transcription.trim() === "" ? styles.errorInput : "" } />

                <input type="text"
                value={russian}
                onChange={((e) => setRussian(e.target.value))}
                className={russian.trim() === "" ? styles.errorInput : "" }/>

                <button onClick={handleCancel}
                        className={styles.saveAndCancel}>
                        Cancel
                </button>
                <button onClick={handleSave}
                        className={styles.saveAndCancel}
                        // disabled={isInvalid}
                        >
                        Save
                </button>
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                </>
            ) : (
                <>
                <span>{english}</span>
                <span>{transcription}</span>
                <span>{russian}</span>
                <button className={styles.btn} onClick={() => setIsEditing(true)} >Edit</button>
                <button className={styles.btn} onClick={onDelete} >Delete</button>
                </>
            )}
        </div>
    )
}
export default Card