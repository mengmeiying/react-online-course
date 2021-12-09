import Form from "./Form/Form";
import classes from "./Posts.module.css";
import Post from "./Post/Post"

const Posts = () => {
    return (  
      <div className={classes.posts}>
          <h2>My posts:</h2>
          <Form />
          <ul className={classes.posts_list}>
            <li className={classes.post}><Post /></li>
            <li className={classes.post}><Post /></li>
            <li className={classes.post}><Post /></li>
          </ul>
        </div>
    )
}

export default Posts;