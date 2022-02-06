import styles from "./Posts.module.css";
import Post from "./Post/Post"
import FormContainer from "./Form/FormContainer";

const Posts = (props) => {
  let postsElements = props.store.getState().profilePage.postsData.map( post => <Post text={post.text} likes={post.likes} key={post.id}/>)
  debugger;
  return (
    <div className={styles.posts}>
      <h2>My posts:</h2>
      <FormContainer store={props.store}/>
      <ul className={styles.posts_list}>
        {postsElements}
      </ul>
    </div>
  )
}

export default Posts;