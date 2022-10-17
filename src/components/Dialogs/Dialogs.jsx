import Styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    const  messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={Styles.dialogs}>
            <div className={Styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={Styles.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs