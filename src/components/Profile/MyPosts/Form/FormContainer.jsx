import React from "react";
import { addPostActionCreator } from "../../../../redux/profileReducer";
import { updateNewPostActionCreator } from "../../../../redux/profileReducer";
import Form from "./Form";

const FormContainer = (props) => {
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text));
    }

    return (
        <Form updateNewPostText={onPostChange} addPost={addPost} newPostText={props.store.getState().profilePage.newPostText}/>
    );
}

export default FormContainer;