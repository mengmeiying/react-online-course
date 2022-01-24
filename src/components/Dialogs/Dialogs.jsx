import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import NamesItem from "./NamesItem/NamesItem";
import React from "react";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map( dialog => <NamesItem number={dialog.id} name={dialog.name}/>);

    let messagesElements = props.state.messagesData.map(message => <Message src={message.src} text={message.text}/>);

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
    }

    return (
        <div>
            <h1 className={styles.heading}>Dialogs</h1>
            <div className={styles.wrapper}>
                <ul className={styles.names_list}>
                    {dialogsElements}
                </ul>
                <div>
                <ul className={styles.chat_list}>
                    {messagesElements} 
                </ul>
                <textarea onChange={onMessageChange} ref={newMessageElement} cols="30" rows="10" value={props.state.newMessageText}></textarea>
                <button onClick={addMessage}>Send</button>
                </div>
                
            </div>

        </div>
    );
}

export default Dialogs;