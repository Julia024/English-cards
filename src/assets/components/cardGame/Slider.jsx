import { useState,  } from "react"
import styles from "./slider.module.css"
import Buttons from "./Buttons.jsx"
import Translation from "./Translation.jsx"
import  useCount  from "../hooks/useCount.js"

const Slider = ({cards = [], defaultIndex = 0}) => {

    const [index, setIndex] = useState(defaultIndex)
    const {count, learnedCount} = useCount()

    const hasCards = cards.length > 0
    const currentCard = hasCards ? cards[index] : null

    if(!cards || cards.length === 0) {
        return <div>No cards</div>
    }

    return (
        <div className={styles.slider} >
            <div className={styles.cardOne} >
                <h4 className={styles.english} >{currentCard.english}</h4>
                <p className={styles.transcription} >{currentCard.transcription}</p>
                <Translation 
                    currentCard={currentCard} 
                    index={index} 
                    onLearned ={learnedCount}/>
            </div >
            <Buttons index={index} setIndex={setIndex} cards={cards} />
            <p>{index + 1}/{cards.length}</p>
            <p>Выученных слов:  {count}</p>
        </div>
    )
}

export default Slider

