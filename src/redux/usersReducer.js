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

export const setUsersActionCreator = (usersData) => {
    return {
        type: SET_USERS,
        usersData
    }
}

const initialState = {
    usersData: []
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