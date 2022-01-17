import styles from "./Form.module.css";
import React from "react";

const Form = (props) => {
    let newPostElement = React.createRef();
    let onButtonClick = (e) => {
        e.preventDefault();

        props.addPost(newPostElement.current.value);
        newPostElement.current.value = '';
    }
    return (
        <form className={styles.form}>
            <textarea ref={newPostElement} className={styles.textarea} name="post" id="1" cols="30" rows="5" placeholder="Enter your post"></textarea>
            <button onClick={onButtonClick} className={styles.submit} type="submit">Submit</button>
        </form>
    );
}

export default Form;