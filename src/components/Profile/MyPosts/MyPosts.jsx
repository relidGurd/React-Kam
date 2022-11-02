import Styles from './MyPosts.module.css'
import Post from "./Posts/Post";
import React from "react";


const MyPosts = (props) => {

    const postsElements = props.posts.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    const addNewPost = () => {
        props.addPost()
    }
    const onNewPostChange = (e) => {
        const text = e.target.value
        props.updatePostText(text)
    }
    return (
        <div className={Styles.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onNewPostChange}  value={props.posts.newPostText}/>
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div className={Styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts