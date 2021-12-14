import styles from "./Message.module.css";

const Message = (props) => {
    return (
        <li className={styles.message}>
            <img className={styles.avatar} src={props.src} alt="" />
            <p className={styles.text}>{props.text}</p>
        </li>
    );
}

export default Message;