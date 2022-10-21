import Styles from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {actionAddMessage, actionOnChangeMessage} from "../../redux/dialogsReducer";


const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} image={d.image}/>)
    const  messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    const addMessage = () => {
        props.dispatch(actionAddMessage())
    }

    const onChangeMessage = (e) => {
        const message = e.target.value
        props.dispatch(actionOnChangeMessage(message))
    }

    return (
        <div className={Styles.dialogs}>
            <div className={Styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={Styles.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea onChange={onChangeMessage} value={props.dialogsPage.messagesText}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs