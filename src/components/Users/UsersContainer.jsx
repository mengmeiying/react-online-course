import Users from "./Users";
import { connect } from "react-redux";
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/usersReducer";

let mapStateToProps = (state) => {
  return {
      users: state.usersPage.usersData
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
      setUsers: (users) => {
          dispatch(setUsersActionCreator(users))
      }
  }
};

const UsersContainer = connect(mapStateToProps, mapDispatchtoProps)(Users);


export default UsersContainer;