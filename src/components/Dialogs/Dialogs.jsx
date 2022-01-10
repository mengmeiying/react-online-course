import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import NamesItem from "./NamesItem/NamesItem";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map( dialog => <NamesItem number={dialog.id} name={dialog.name}/>);

    let messagesElements = props.state.messagesData.map(message => <Message src={message.src} text={message.text}/>);

    return (
        <div>
            <h1 className={styles.heading}>Dialogs</h1>
            <div className={styles.wrapper}>
                <ul className={styles.names_list}>
                    {dialogsElements}
                </ul>
                <ul className={styles.chat_list}>
                    {messagesElements} 
                </ul>
            </div>

        </div>
    );
}

export default Dialogs;