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

  return (
    <div className={styles.posts}>
      <h2>My posts:</h2>
      <Form />
      <ul className={styles.posts_list}>
        <li className={styles.post}>
          <Post text={postsData[0].text} likes={postsData[0].likes} />
        </li>
        <li className={styles.post}>
          <Post text={postsData[1].text} likes={postsData[1].likes} />
        </li>
        <li className={styles.post}>
          <Post text={postsData[2].text} likes={postsData[2].likes} />
        </li>
        <li className={styles.post}>
          <Post text={postsData[3].text} likes={postsData[3].likes} />
        </li>
      </ul>
    </div>
  )
}

export default Posts;