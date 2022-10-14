import Styles from './MyPosts.module.css'
import Post from "./Posts/Post";
const MyPosts = () => {
    return (
        <div className={Styles.content}>
            <div>
                My Posts
                <div>
                    New Post
                </div>

                <Post message='Привет' likesCount='50'/>
                <Post message='Пока' likesCount='40'/>

            </div>
        </div>
    )
}

export default MyPosts