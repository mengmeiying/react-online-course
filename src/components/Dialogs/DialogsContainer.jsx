import React from "react";
import { addMessageActionCreator } from "../../redux/dialogsReducer";
import { updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <Dialogs addMessage={addMessage} onMessageChange={onMessageChange} store={props.store} newMessageText={props.store.getState().dialogsPage.newMessageText}/>
    );
}

export default DialogsContainer;