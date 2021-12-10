import styles from "./Form.module.css";

const Form = () => {
    return (
        <form className={styles.form}>
            <textarea className={styles.textarea} name="post" id="1" cols="30" rows="5" placeholder="Enter your post"></textarea>
            <button className={styles.submit} type="submit">Submit</button>
        </form>
    );
}

export default Form;