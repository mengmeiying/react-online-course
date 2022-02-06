import styles from "./Posts.module.css";
import Post from "./Post/Post"
import Form from "./Form/Form";

const Posts = (props) => {
  debugger
  let postsElements = props.postsData.map( post => <Post text={post.text} likes={post.likes} key={post.id}/>)
  return (
    <div className={styles.posts}>
      <h2>My posts:</h2>
      <Form addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.newPostText}/>
      <ul className={styles.posts_list}>
        {postsElements}
      </ul>
    </div>
  )
}

export default Posts;