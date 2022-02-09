import Users from "./Users";
import { connect } from "react-redux";
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData
    }
};

let mapDispatchtoProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (usersData) => {
            dispatch(setUsersActionCreator(usersData))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchtoProps)(Users);


export default UsersContainer;