import Styles from './Posts.module.css'

const Post = (props) => {
    return (
        <div className={Styles.postsBlock}>
            <img src="https://mobile-comp.com/images/user.png" width="40px" alt=""/>
            {props.message}
            <span> Понравилось: {props.likesCount}</span>
        </div>
    )
}

export default Post