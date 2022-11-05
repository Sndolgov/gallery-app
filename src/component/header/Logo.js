import styles from './Logo.module.css'
import logo from "../../asserts/logo.png";


const Logo = () => {
    return (
        <div className={styles.logo}>
            {/*<a href="https://www.malikafavre.com/">*/}
            <img src={logo} alt='Logo'/>
            {/*</a>*/}
        </div>
    )
}

export default Logo