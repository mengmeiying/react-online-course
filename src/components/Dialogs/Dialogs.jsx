import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import NamesItem from "./NamesItem/NamesItem";

const Dialogs = () => {
    return (
        <div>
            <h1 className={styles.heading}>Dialogs</h1>
            <div className={styles.wrapper}>
                <ul className={styles.names_list}>
                    <NamesItem number='1' name="Andrew"/>
                    <NamesItem number='2' name="Sasha"/>
                    <NamesItem number='3' name="Nadya"/>
                </ul>
                <ul className={styles.chat_list}>
                    <Message src="https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png"
                            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                            aliquid impedit assumenda corrupti commodi temporibus, repellendus sunt a sapiente odit,
                            nemo laboriosam necessitatibus amet. Debitis provident obcaecati eius aut natus!"/>
                            <Message src="https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png"
                            text="Hello world!"/>
                </ul>
            </div>

        </div>
    );
}

export default Dialogs;