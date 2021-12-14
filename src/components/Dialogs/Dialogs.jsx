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
    return (
        <div>
            <h1 className={styles.heading}>Dialogs</h1>
            <div className={styles.wrapper}>
                <ul className={styles.names_list}>
                    <NamesItem number={dialogsData[0].id} name={dialogsData[0].name}/>
                    <NamesItem number={dialogsData[1].id} name={dialogsData[1].name}/>
                    <NamesItem number={dialogsData[2].id} name={dialogsData[2].name}/>
                    <NamesItem number={dialogsData[3].id} name={dialogsData[3].name}/>
                </ul>
                <ul className={styles.chat_list}>
                    <Message src={messagesData[0].src}
                            text={messagesData[0].text}/>
                    <Message src={messagesData[1].src}
                            text={messagesData[1].text}/>
                    <Message src={messagesData[2].src}
                            text={messagesData[2].text}/>
                            
                </ul>
            </div>

        </div>
    );
}

export default Dialogs;