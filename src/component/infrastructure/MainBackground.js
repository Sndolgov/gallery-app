import background from  '../../asserts/background.jpg'
import styles from './MainBackground.module.css'

const MainBackground = (props) => {
    return (
        // <div className={styles.background}>
        //     <img className={styles['main-background']} src={background} alt='Main'/>
        //     {props.children}
        // </div>
        <div className={styles['main-background']} style={{ backgroundImage: `url(${background})` }}>
            {props.children}
        </div>
    )
}

export default MainBackground