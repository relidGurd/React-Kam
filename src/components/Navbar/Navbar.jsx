import classes from './Navbar.module.css'
const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><a href="react1/src/components/Navbar/Navbar#">Profile</a></li>
                <li><a href="react1/src/components/Navbar/Navbar#">Messages</a></li>
                <li><a href="react1/src/components/Navbar/Navbar#">News</a></li>
                <li><a href="react1/src/components/Navbar/Navbar#">Music</a></li>
                <li><a href="react1/src/components/Navbar/Navbar#">Settings</a></li>
            </ul>
        </nav>
    )
}

export default Navbar