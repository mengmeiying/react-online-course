import Posts from "./Posts";
import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profileReducer";
import { updateNewPostActionCreator } from "../../../redux/profileReducer";

let mapStateToProps = (state) => {
  return {
      postsData: state.profilePage.postsData,
      newPostText: state.profilePage.newPostText
  }
};

let mapDispatchtoProps = (dispatch) => {
  return {
      addPost: () => {
          dispatch(addPostActionCreator());
      },
      updateNewPostText: (text) => {
          dispatch(updateNewPostActionCreator(text));
      }
  }
};

const PostsContainer = connect(mapStateToProps, mapDispatchtoProps)(Posts);

export default PostsContainer;