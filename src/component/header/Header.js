import styles from './Header.module.css'
import Logo from "./Logo";
import MenuBar from "./MenuBar";

const Header = (props) => {

    return (
        <header className={styles.header}>
            <div className={styles['left-items']}>
                <MenuBar items={props.menuItems.left}/>
            </div>
            <Logo/>
            <div className={styles['right-items']}>
                <MenuBar items={props.menuItems.right}/>
            </div>
        </header>
    )
}

export default Header