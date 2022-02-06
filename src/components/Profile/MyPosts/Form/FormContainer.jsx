import { connect } from "react-redux";
import { addPostActionCreator } from "../../../../redux/profileReducer";
import { updateNewPostActionCreator } from "../../../../redux/profileReducer";
import Form from "./Form";

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

const FormContainer = connect(mapStateToProps, mapDispatchtoProps)(Form);

export default FormContainer;