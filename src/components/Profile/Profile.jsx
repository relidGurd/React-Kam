import StyleProfile from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://i.ytimg.com/vi/T33WFmJCHT0/maxresdefault.jpg" alt=""/>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile