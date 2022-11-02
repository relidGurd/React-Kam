
import {addPostActionCreator} from "../../../redux/profileReducer";
import {changePostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => {dispatch(changePostActionCreator(text))},
        addPost: () => {dispatch(addPostActionCreator())}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer