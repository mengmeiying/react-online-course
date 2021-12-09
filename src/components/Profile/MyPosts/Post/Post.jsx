import classes from "./Post.module.css";

const Post = () => {
    return (
        <div className={classes.post}>
            <img className={classes.avatar} src="https://www.pngarts.com/files/11/Avatar-PNG-Download-Image.png" alt="" />
            <p className={classes.text}>some post text</p>
            <button className={classes.like}>1 ♡</button>
        </div>
    );
}

export default Post;