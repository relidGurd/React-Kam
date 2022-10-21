import Styles from './FriendsBlock.module.css'
import FriendItem from "./FriendItem/FriendItem";

const FriendsBlock = (props) => {
    const Friends = props.state.map(f => <FriendItem image={f.image} name={f.name}/>)
    return (
        <div className={Styles.friendsBlock}>
            <h3>Friends</h3>
            <div className={Styles.friends}>
                {Friends}
            </div>
        </div>
    )
}

export default FriendsBlock