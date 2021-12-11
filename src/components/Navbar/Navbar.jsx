import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><NavLink className={styles.link} to="/dialogs">Messages</NavLink></li>
        <li><NavLink className={styles.link} to="/news">News</NavLink></li>
        <li><NavLink className={styles.link} to="/profile">Profile</NavLink></li>
        <li><NavLink className={styles.link} to="/music">Music</NavLink></li>
        <li><NavLink className={styles.link} to="/settings">Settings</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;