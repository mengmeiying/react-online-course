const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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

const initialState = {
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
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: state.newPostText,
                likes: 0
            };
            state.postsData.push(newPost);

            state.newPostText = '';
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state;
        }
        default:
            return state;
    }


}