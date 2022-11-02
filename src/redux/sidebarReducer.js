const initialState = {
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

const sidebarReducer = (state = initialState, action) => {
    return state
}

export default sidebarReducer