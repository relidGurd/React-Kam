const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

let initialState = {
    posts: [{id: 1, message: 'how are yiu', likesCount: 10}, {id: 2, message: 'second post', likesCount: 30},],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 10,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const changePostActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer