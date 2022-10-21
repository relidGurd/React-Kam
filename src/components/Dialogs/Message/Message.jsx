import Styles from './Message.module.css'


const Message = (props) => {
    return (
        <div className={Styles.message}>
            <div className={Styles.message_outer}>
                <div className={Styles.message_inner}>
                    <div className={Styles.message_bubble}>
                        {props.message}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message