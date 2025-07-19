import styles from "./slider.module.css"

const Buttons = ({index, setIndex, cards}) => {
    
    const next = () => {
        index < cards.length - 1 
        ? setIndex(index + 1)
        : setIndex(0)
    }

    const previous = () => {
        index > 0
        ? setIndex(index - 1)
        : setIndex(cards.length - 1)
    }

    return (
        <div className={styles.btns}>
            <button onClick={previous}  >
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="20 24 12 32 20 40"></polyline><line x1="52" y1="32" x2="12" y2="32"></line></g></svg>
            </button>
            <button onClick={next} >
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="44 40 52 32 44 24"></polyline><line x1="52" y1="32" x2="12" y2="32"></line></g></svg>
            </button>
        </div>
    )
}
export default Buttons