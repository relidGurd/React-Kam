import Styles from './MyPosts.module.css'
import Post from "./Posts/Post";
import React from "react";
import {addPostActionCreator} from "../../../redux/profileReducer";
import {changePostActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {

    const postsElements = props.posts.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const onPostChange = (e) => {
        const text = e.target.value
        props.dispatch(changePostActionCreator(text))
    }
    return (
        <div className={Styles.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}  value={props.posts.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={Styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts