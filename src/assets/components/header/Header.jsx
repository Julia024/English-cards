import { NavLink } from "react-router"
import styles from "./header.module.css"
import Logo from "./Logo.jsx"

const Header = () => {
    return (
        <div className={styles.wrapper} >
            <NavLink to="/">
                <Logo/>
            </NavLink>
            <nav  >
                <ul className={styles.list} >
                    <li>
                        <NavLink to="/" className={({isActive}) => 
                            isActive? styles.active : null} 
                            >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/game" className={({isActive}) => 
                            isActive? styles.active : null }
                            >Game</NavLink>
                    </li>
                </ul>
                
                
            </nav>
            
        </div>
    )
}

export default Header