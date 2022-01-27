const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, newText: text
    }
}

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
                text: state.newMessageText
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText;
            return state;
        }
        default:
            return state;
    }


}