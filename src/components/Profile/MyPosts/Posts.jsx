import Form from "./Form/Form";
import styles from "./Posts.module.css";
import Post from "./Post/Post"

const Posts = () => {
  let postsData = [
    {
      id: 1,
      text: `post 1`,
      likes: 1
    },
    {
      id: 2,
      text: `post 2`,
      likes: 14
    },
    {
      id: 3,
      text: `post 3`,
      likes: 32
    },
    {
      id: 4,
      text: `post 4`,
      likes: 8
    },
  ]

  let postsElements = postsData.map( post => <Post text={post.text} likes={post.likes} />)
  return (
    <div className={styles.posts}>
      <h2>My posts:</h2>
      <Form />
      <ul className={styles.posts_list}>
        {/* <li className={styles.post}>
          
        </li> */}
        {postsElements}
      </ul>
    </div>
  )
}

export default Posts;