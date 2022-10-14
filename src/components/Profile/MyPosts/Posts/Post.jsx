import Styles from './Posts.module.css'
const Post = (props) => {
    return (
        <div className={Styles.item}>
            <img src="#" alt=""/>
            { props.message }
            <span> Понравилось: {props.likesCount}</span>
        </div>
    )
}

export default Post