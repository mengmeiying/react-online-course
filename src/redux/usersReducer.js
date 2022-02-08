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
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed = true};
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id !== action.userID) {
                        return {...u, followed = false};
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }


}