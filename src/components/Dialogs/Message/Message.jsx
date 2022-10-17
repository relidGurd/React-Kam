import Styles from './Message.module.css'


const Message = (props) => {
    return (
        <div className={Styles.messages}>
            {props.message}
        </div>
    )
}

export default Message