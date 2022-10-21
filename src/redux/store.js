import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: 'how are yiu', likesCount: 10}, {id: 2, message: 'second post', likesCount: 30},],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Denis',
                    image: 'https://mobile-comp.com/images/user.png'
                },
                {
                    id: 2,
                    name: 'Lev',
                    image: 'https://mobile-comp.com/images/user.png',
                },
                {
                    id: 3,
                    name: 'Lilia',
                    image: 'https://mobile-comp.com/images/user.png',
                },
                {
                    id: 4,
                    name: 'Mom',
                    image: 'https://mobile-comp.com/images/user.png',
                },
                {
                    id: 5,
                    name: 'Dad',
                    image: 'https://mobile-comp.com/images/user.png',
                },],
            messagesText: '',
            messages: [{id: 1, message: 'Text inside'}, {id: 2, message: 'After Life Text'}, {
                id: 3,
                message: 'Third Text'
            }]
        },
        sidebar: {
            menu: [
                {src: '/profiles', name: 'Profile'},
                {src: '/dialogs', name: 'Messages'},
                {src: '/news', name: 'News'},
                {src: '/music', name: 'Music'},
                {src: '/settings', name: 'Settings'},],
            myFriends: [
                {id: 1, image: 'https://mobile-comp.com/images/user.png', name: 'Олег'},
                {id: 2, image: 'https://mobile-comp.com/images/user.png', name: 'Виталий'},
                {id: 3, image: 'https://mobile-comp.com/images/user.png', name: 'Дима'}]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
       this._state.profilePage = profileReducer(this._state.profilePage, action)
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
       this._state.sidebar = sidebarReducer(this._state.sidebar, action)

       this._callSubscriber(this._state)
    }

}


export default store