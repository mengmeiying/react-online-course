import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <li className={styles.post}>
            <img className={styles.avatar} src="https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png" alt="" />
            <p className={styles.text}>{props.text}</p>
            <button className={styles.like}>{props.likes} ♡</button>
        </li>
    );
}

export default Post;