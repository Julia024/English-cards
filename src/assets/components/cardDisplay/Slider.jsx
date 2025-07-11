import { useState } from "react"
import Arr from "../Arr"
import styles from "./slider.module.css"

const Slider = () => {
    const [index, setIndex] = useState(0)
    const [translate, setTranslate] = useState('Показать перевод')
    const handleChange = () => {
        setTranslate(`${currentCard.russian}`)
    }

    const next = () => {
        if (index < Arr.length - 1) {
            setIndex(index + 1)
        }
        setTranslate('Показать перевод')
    }

    const previous = () => {
        if (index > 0) {
            setIndex (index - 1)
        }
        setTranslate('Показать перевод')
    }

    const currentCard = Arr[index]

    return (
        <div className={styles.slider} >
            <div className={styles.cardOne} >
                <h4 className={styles.english} >{currentCard.english}</h4>
                <p className={styles.transcription} >{currentCard.transcription}</p>
                <p onClick={handleChange} 
                    className={`${translate === "Показать перевод" ? styles.hidden : styles.shows}`} >
                    {translate}</p>
            </div >
            <div className={styles.btns}>
                <button onClick={previous} disabled={index === 0} >Previous</button>
                <button onClick={next} disabled={index === Arr.length - 1}>Next</button>
            </div>
        </div>
    )
}

export default Slider