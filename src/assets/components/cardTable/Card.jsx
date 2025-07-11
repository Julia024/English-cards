import styles from "./card.module.css"
const Card = ({english, transcription, russian}) => {
    
    return (
        <div className={styles.card} >
            <span>{english}</span>
            <span>{transcription}</span>
            <span>{russian}</span>
            <button className={styles.btn}>Delete</button>
        </div>
    )
}

export default Card