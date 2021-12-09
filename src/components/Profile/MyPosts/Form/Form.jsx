import classes from "./Form.module.css";

const Form = () => {
    return (
        <form className={classes.form}>
            <textarea className={classes.textarea} name="post" id="1" cols="30" rows="5" placeholder="Enter your post"></textarea>
            <button className={classes.submit} type="submit">Submit</button>
        </form>
    );
}

export default Form;