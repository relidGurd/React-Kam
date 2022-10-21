import Styles from './MenuItem.module.css'
import {NavLink} from "react-router-dom";


const MenuItem = (props) => {
    return (
        <li className={Styles.item}><NavLink to={props.src} className={({isActive}) => isActive ? Styles.activeLink : ''}>{props.name}</NavLink></li>
    )
}

export default MenuItem