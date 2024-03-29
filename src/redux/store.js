import { dialogsReducer } from "./dialogsReducer";
import { navReducer } from "./navReducer";
import { profileReducer } from "./profileReducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navPage = navReducer(this._state.navPage, action);

        this._callSubscriber();
    }

}

export default store;