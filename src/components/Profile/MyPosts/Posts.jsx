import Form from "./Form/Form";
import styles from "./Posts.module.css";
import Post from "./Post/Post"

const Posts = (props) => {
  

  let postsElements = props.postsData.map( post => <Post text={post.text} likes={post.likes} />)
  return (
    <div className={styles.posts}>
      <h2>My posts:</h2>
      <Form  newPostText={props.newPostText} dispatch={props.dispatch}/>
      <ul className={styles.posts_list}>
        {postsElements}
      </ul>
    </div>
  )
}

export default Posts;