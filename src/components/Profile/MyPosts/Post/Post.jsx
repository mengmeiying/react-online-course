import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={styles.post}>
            <img className={styles.avatar} src="https://www.pngarts.com/files/11/Avatar-PNG-Download-Image.png" alt="" />
            <p className={styles.text}>{props.text}</p>
            <button className={styles.like}>{props.likes} ♡</button>
        </div>
    );
}

export default Post;