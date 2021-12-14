import styles from "./NamesItem.module.css";
import { NavLink } from "react-router-dom";

const NamesItem = (props) => {
    return (
        <li className={`${styles.names_item} ${styles.active}`}>
            <NavLink to={`/dialogs/${props.number}`}>{`${props.name}`}</NavLink>
        </li>
    );
}

export default NamesItem;