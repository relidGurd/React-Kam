import React from "react";
import Styles from "./Styles.module.css"
import axios from "axios";
import userPhoto from '../../assets/images/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png'

const Users = (props) => {

    if(props.users.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            props.setUsers(res.data.items)
        })
    }
    return (
        <div>
            {
                props.users.users.map(u => <div key={u.id}>
                    <span>
                        <div><img className={Styles.usersPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""/></div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unFollow(u.id) }}>Unfollow</button>
                                : <button  onClick={() => { props.follow(u.id) }}>follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                            <div></div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users