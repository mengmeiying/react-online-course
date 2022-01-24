const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    text: `post 1`,
                    likes: 1
                },
                {
                    id: 2,
                    text: `post 2`,
                    likes: 14
                },
                {
                    id: 3,
                    text: `post 3`,
                    likes: 32
                },
                {
                    id: 4,
                    text: `post 4`,
                    likes: 8
                },
            ],
            newPostText: 'enter text'
        },

        dialogsPage: {
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
        },

        navPage: {
            friendsData: [
                {
                    id: 1,
                    src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
                    name: `Masha`
                },
                {
                    id: 2,
                    src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
                    name: `Sasha`
                },
                {
                    id: 3,
                    src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
                    name: `Dasha`
                }
            ]
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                text: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.postsData.push(newPost);

            this._callSubscriber();
            this._state.profilePage.newPostText = '';
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
        else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 4,
                src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
                text: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messagesData.push(newMessage);
            this._callSubscriber();
            this._state.dialogsPage.newMessageText = '';
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber();
        }
    }

}

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

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default store;