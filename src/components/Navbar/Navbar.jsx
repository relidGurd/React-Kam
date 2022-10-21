import Styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import FriendsBlock from "./FriendsBlock/FriendsBlock";
import MenuItem from "./MenuItem/MenuItem";
const Navbar = (props) => {
    const menuItems = props.state.menu.map(m => <MenuItem src={m.src} name={m.name}/>)
    return (
        <nav className={Styles.nav}>
            <ul>
                {menuItems}
            </ul>
            <FriendsBlock state={props.state.myFriends}/>
        </nav>
    )
}

export default Navbar