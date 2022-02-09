const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export const followActionCreator = (userID) => {
    return {
        type: FOLLOW,
        userID
    }
}

export const unfollowActionCreator = (userID) => {
    return {
        type: UNFOLLOW,
        userID
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

const initialState = {
    usersData: [
        {
            id: 1,
            name: `maria`,
            status: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                city: 'Moscow',
                country: "Russia"
            },
            followed: true,
            avatarSrc: 'https://teachingandlearning.schulich.yorku.ca/wp-content/uploads/2019/10/avatar6.png'
        },
        {
            id: 2,
            name: `maria`,
            status: 'hello',
            location: {
                city: 'Moscow',
                country: "Russia"
            },
            followed: false,
            avatarSrc: 'https://teachingandlearning.schulich.yorku.ca/wp-content/uploads/2019/10/avatar6.png'
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
            avatarSrc: 'https://teachingandlearning.schulich.yorku.ca/wp-content/uploads/2019/10/avatar6.png'
        },
        {
            id: 4,
            name: `maria`,
            status: 'hello',
            location: {
                city: 'Moscow',
                country: "Russia"
            },
            followed: false,
            avatarSrc: 'https://teachingandlearning.schulich.yorku.ca/wp-content/uploads/2019/10/avatar6.png'
        },

    ]
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state, usersData: [...state.usersData, ...action.usersData]
            }
        }
        default:
            return state;
    }


}