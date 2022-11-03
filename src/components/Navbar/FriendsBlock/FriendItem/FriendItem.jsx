import Styles from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <div className={Styles.friends}>
            <img src={props.image} alt='avatar' width="30px"/>
            <p>{props.name}</p>
        </div>
    )
}

export default FriendItem