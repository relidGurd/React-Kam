import Styles from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`
    return (
        <div className={Styles.dialogsItems}>
            <img className={Styles.userImage} src={props.image} width='30px' alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem