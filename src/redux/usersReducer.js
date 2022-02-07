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
    usersData: [
        {
            id: 1,
            name: `maria`,
            status: 'hello',
            location: {
                city: 'Moscow',
                country: "Russia"
            },
            followed: true,
            avatarSrc: 'some src'
        },
        {
            id: 2,
            name: `maria`,
            status: 'hello',
            location: {
                city: 'Moscow',
                country: "Russia"
            },
            followed: true,
            avatarSrc: 'some src'
        },
        {
            id: 3,
            name: `maria`,
            status: 'hello',
            location: {
                city: 'Moscow',
                country: "Russia"
            },
            followed: true,
            avatarSrc: 'some src'
        },
        {
            id: 4,
            name: `maria`,
            status: 'hello',
            location: {
                city: 'Moscow',
                country: "Russia"
            },
            followed: true,
            avatarSrc: 'some src'
        },

    ]
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {

        }
        case UPDATE_NEW_POST_TEXT: {

        }
        default:
            return state;
    }


}