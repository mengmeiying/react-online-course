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

const initialState = {
    messagesData: [
        {
            id: 1,
            src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
            text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                aliquid impedit assumenda corrupti commodi temporibus, repellendus sunt a sapiente odit,
                nemo laboriosam necessitatibus amet. Debitis provident obcaecati eius aut natus!`
        },
        {
            id: 2,
            src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
            text: `Hello world`
        },
        {
            id: 3,
            src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
            text: `ok google how to write`
        }
    ],
    dialogsData: [
        {
            id: 1,
            name: "Andrew"
        },
        {
            id: 2,
            name: "Maria"
        },
        {
            id: 3,
            name: "Alex"
        },
        {
            id: 4,
            name: "Nadya"
        },
    ],
    newMessageText: 'enter text'
}

export const dialogsReducer = (state = initialState, action) => {
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