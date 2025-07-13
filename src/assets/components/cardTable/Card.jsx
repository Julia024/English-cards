import { useState } from "react"
import styles from "./card.module.css"

const Card = ({card, onSave, onDelete}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [english, setEnglish] = useState(card.english);
    const [transcription, setTranscription] = useState(card.transcription);
    const [russian, setRussian] = useState(card.russian);

    const handleCancel = () => {
        setIsEditing(false);
        setEnglish(card.english);
        setTranscription(card.transcription)
        setRussian(card.russian)
    }

    const handleSave = () => {
        const updatedCards = {
            ...card,
            english, 
            transcription, 
            russian
        }
        onSave(updatedCards)
        setIsEditing(false)
    }

    return (
        <div className={styles.card} >
            {isEditing ? (
                <>
                <input type="text" 
                value={english}
                onChange={((e) => setEnglish(e.target.value))}/>
                <input type="text"
                value={transcription}
                onChange={((e) => setTranscription(e.target.value))}/>
                <input type="text"
                value={russian}
                onChange={((e) => setRussian(e.target.value))}/>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleSave}>Save</button>
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