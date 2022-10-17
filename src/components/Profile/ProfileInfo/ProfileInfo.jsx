import Styles from './ProfileInfo.module.css'
import Post from "../MyPosts/Posts/Post";
const ProfileInfo = () => {
    return (
        <div className={Styles.content}>
            <div>
                <img src="https://i.ytimg.com/vi/T33WFmJCHT0/maxresdefault.jpg" alt=""/>
            </div>
            <div className={Styles.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo