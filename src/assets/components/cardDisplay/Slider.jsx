import { useState, useEffect } from "react"
import React from "react"
import styles from "./slider.module.css"
import Buttons from "./Buttons"


const Slider = ({cards = [], defaultIndex = 0}) => {

    const [index, setIndex] = useState(defaultIndex)
    const [translate, setTranslate] = useState('Показать перевод')

    const hasCards = cards.length > 0
    const currentCard = hasCards ? cards[index] : null


    const handleTranslate = () => {
        if (currentCard) {
            setTranslate(currentCard.russian)
        }
    }

    useEffect(() => {
        setTranslate('Показать перевод')
    }, [index])

    if(!cards || cards.length === 0) {
        return <div>No cards</div>
    }

    return (
        <div className={styles.slider} >
            <div className={styles.cardOne} >
                <h4 className={styles.english} >{currentCard.english}</h4>
                <p className={styles.transcription} >{currentCard.transcription}</p>
                <p onClick={handleTranslate} 
                    className={`${translate === "Показать перевод" ? styles.hidden : styles.shows}`} >
                    {translate}</p>
            </div >
            <Buttons index={index} setIndex={setIndex} cards={cards} />
            <p>{index + 1}/{cards.length}</p>
        </div>
    )
}

export default Slider

