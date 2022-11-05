import styles from './MenuBar.module.css'

const MenuBar = (props) => {

    const items =
        props.items.map((item, index) => {
            return <li key={index}>{item}</li>
        })


    return (
        // <nav>
            <ul>{items}</ul>
        // </nav>
    )
}

export default MenuBar