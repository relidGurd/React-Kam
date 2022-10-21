const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {id: 12, message: state.messagesText}
            state.messages.push(newMessage)
            state.messagesText = '';
            return state
        case UPDATE_MESSAGE_TEXT:
            state.messagesText = action.newMessageText
            return state;
        default:
            return state;
    }
}

export const actionAddMessage = () => ({type: ADD_MESSAGE})

export const actionOnChangeMessage = (message) =>
    ({ type: UPDATE_MESSAGE_TEXT, newMessageText: message })

export default dialogsReducer