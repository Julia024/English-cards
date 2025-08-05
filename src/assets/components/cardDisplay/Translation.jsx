import { useState, useEffect, useRef } from "react"
import styles from "./slider.module.css"


const Translation = ({currentCard, index, onLearned}) => {
    const [translate, setTranslate] = useState('Показать перевод')
    const buttonRef = useRef(null)

    useEffect(() => {
        setTranslate('Показать перевод')
        if (buttonRef.current){
            buttonRef.current.focus()
        }
        }, [index]
    )

    const handleTranslate = () => {
        if (currentCard) {
            setTranslate(currentCard.russian)
            onLearned();
        }
    }

    return (
        <button onClick={handleTranslate} 
            ref={buttonRef}
            className={`${translate === "Показать перевод" ? styles.hidden : styles.shows}`}>
            {translate}
        </button>
    )
}

export default Translation