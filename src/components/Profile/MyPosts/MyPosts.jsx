import Styles from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = (props) => {

    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={Styles.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={Styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts