import styles from "./header.module.css"
import icon from "./logo.svg"

const Logo = () => {
    return (
        <div className={styles.logo} to="/" >
            <img src={icon} alt="logo"  className={styles.icon} />
            <p className={styles.logoText} >English Cards</p>
        </div>
    )
}

export default Logo