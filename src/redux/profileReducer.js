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

export const profileReducer = (state, action) => {
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