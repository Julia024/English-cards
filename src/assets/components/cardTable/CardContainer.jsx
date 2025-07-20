import { useState } from "react"
import Arr from "../Arr"
import Card from "./Card"
import styles from "./card.module.css"


const CardContainer = () => {
    const [cards, setCards] = useState(Arr)

    const handleSave = (updatedCards) => {
        const newCards = cards.map((card) => 
            card.id === updatedCards.id ? updatedCards : card
        )
        setCards(newCards)
    }

    const handleDelete = (id) => {
        const filtered = cards.filter(card => card.id !== id)
        setCards(filtered)
    }

    return (
        <ol className={styles.cardContainer}>
        {cards.map((card) => (
            <li className={styles.list} key={card.id}>
                <Card
                card={card}
                onSave={handleSave}
                onDelete ={() => handleDelete(card.id)}
                />
            </li>
        ))}
        </ol>
    )
}
export default CardContainer