import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import NamesItem from "./NamesItem/NamesItem";
import React from "react";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map( dialog => <NamesItem number={dialog.id} name={dialog.name}/>);

    let messagesElements = props.state.messagesData.map(message => <Message src={message.src} text={message.text}/>);

    let newMessageElement = React.createRef();
    let onButtonClick = () => {
        alert(newMessageElement.current.value)
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
                <textarea ref={newMessageElement} cols="30" rows="10"></textarea>
                <button onClick={onButtonClick}>Send</button>
                </div>
                
            </div>

        </div>
    );
}

export default Dialogs;