import FriendItem from "./FriendItem/FriendItem";
import styles from "./Friends.module.css";

const Friends = (props) => {
    let friendsElements = props.state.friendsData.map(friend => <FriendItem src={friend.src} name={friend.name} />)

    return (
        <div>
            <h2>Friends</h2>
            <div className={styles.wrapper}>
                {friendsElements}
            </div>
        </div>
    )
}

export default Friends;