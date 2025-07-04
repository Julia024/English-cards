import Arr from "../Arr"
import Card from "./Card"
import styles from "./card.module.css"


const CardConteiner = () => {
    return (
        <div className={styles.cardContainer}>
        {Arr.map((el) => (
          <Card
            key={el.id}
            {...el}
          />
        ))}
      </div>
    )
}

export default CardConteiner