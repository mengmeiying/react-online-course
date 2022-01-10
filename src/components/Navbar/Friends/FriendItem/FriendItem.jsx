import styles from "../Friends.module.css";

const FriendItem = (props) => {
    return (
        <div className={styles.friendItem}>
            <img src={props.src} alt="#" />
            <h3 className={styles.name}>{`${props.name}`}</h3>
        </div>
    )
}

export default FriendItem;