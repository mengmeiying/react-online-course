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
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    addPost() {
        let newPost = {
            id: 5,
            text: this._state.profilePage.newPostText,
            likes: 0
        };
        this._state.profilePage.postsData.push(newPost);

        this._callSubscriber();
        this.updateNewPostText('');
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber();
    },
    addMessage() {
        let newMessage = {
            id: 4,
            src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
            text: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messagesData.push(newMessage);
        this._callSubscriber();
        this.updateNewMessageText('');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;