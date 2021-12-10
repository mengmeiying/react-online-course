import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img className={classes.avatar} src="https://www.pngarts.com/files/11/Avatar-PNG-Download-Image.png" alt="" />
            <p className={classes.text}>{props.text}</p>
            <button className={classes.like}>{props.likes} ♡</button>
        </div>
    );
}

export default Post;