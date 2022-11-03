import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../redux/usersReducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage
    }
}
const mapStateToDispatch = (dispatch) => {
    return {
        follow: (useId) => {
            dispatch(followAC(useId))
        },
        unFollow: (useId) => {
            dispatch(unFollowAC(useId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapStateToDispatch)(Users)

export default UsersContainer