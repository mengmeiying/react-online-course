import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import NamesItem from "./NamesItem/NamesItem";

const Dialogs = () => {
    let dialogsData = [
        {
            id: 1, 
            name: "Andrew"
        },
        {
            id: 2, 
            name: "Maria"
        },
        {
            id: 3, 
            name: "Alex"
        },
        {
            id: 4, 
            name: "Nadya"
        },
    ];

    let dialogsElements = dialogsData.map( dialog => <NamesItem number={dialog.id} name={dialog.name}/>);

    let messagesData = [
        {
            id: 1,
            src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
            text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            aliquid impedit assumenda corrupti commodi temporibus, repellendus sunt a sapiente odit,
            nemo laboriosam necessitatibus amet. Debitis provident obcaecati eius aut natus!`
        },
        {
            id: 2,
            src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
            text: `Hello world`
        },
        {
            id: 3,
            src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
            text: `ok google how to write`
        }
    ]

    let messagesElements = messagesData.map(message => <Message src={message.src} text={message.text}/>)
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