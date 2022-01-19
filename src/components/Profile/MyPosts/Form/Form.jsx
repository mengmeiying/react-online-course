import styles from "./Form.module.css";
import React from "react";

const Form = (props) => {
    let newPostElement = React.createRef();
    let addPost = (e) => {
        e.preventDefault();
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <form className={styles.form}>
            <textarea ref={newPostElement}
                className={styles.textarea}
                name="post" id="1" cols="30" rows="5"
                placeholder="Enter your post"
                value={props.newPostText}
                onChange={onPostChange}></textarea>
            <button onClick={addPost} className={styles.submit} type="submit">Submit</button>
        </form>
    );
}

export default Form;