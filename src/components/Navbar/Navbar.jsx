import Styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className={Styles.nav}>
            <ul>
                <li className={Styles.item}><NavLink to='/profiles' className={({isActive}) => isActive ? Styles.activeLink : ''}>Profile</NavLink></li>
                <li className={Styles.item}><NavLink to="/dialogs" className={({isActive}) => isActive ? Styles.activeLink : ''}>Messages</NavLink></li>
                <li className={Styles.item}><NavLink to="/news" className={({isActive}) => isActive ? Styles.activeLink : ''}>News</NavLink></li>
                <li className={Styles.item}><NavLink to="/music" className={({isActive}) => isActive ? Styles.activeLink : ''}>Music</NavLink></li>
                <li className={Styles.item}><NavLink to="/settings" className={({isActive}) => isActive ? Styles.activeLink : ''}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar