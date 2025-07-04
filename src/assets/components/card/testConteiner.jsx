import Arr from "../Arr"
import Card from "./Card"
import styles from "./card.module.css"


const TestContainer = () => {
    return (
        <ol className={styles.cardContainer}>
        {Arr.map((el) => (
            <li className={styles.list} >
                <Card
                key={el.id}
                {...el}
                />
            </li>
        ))}
        </ol>
    )
}

export default TestContainer