const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'

const initialState =  {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messagesText: '',
                messages: [...state.messages,  {id: 12, message: state.messagesText}]
            }
        }
        case UPDATE_MESSAGE_TEXT: {
            return {
                ...state,
                messagesText: action.newMessageText
            }
        }
        default:
            return state;
    }
}

export const actionAddMessage = () => ({type: ADD_MESSAGE})

export const actionOnChangeMessage = (message) =>
    ({ type: UPDATE_MESSAGE_TEXT, newMessageText: message })

export default dialogsReducer