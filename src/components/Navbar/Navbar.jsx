import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><NavLink className={navData => navData.isActive ? (styles.active + " " + styles.link) : styles.link} to="/dialogs">Messages</NavLink></li>
        <li><NavLink className={navData => navData.isActive ? (styles.active + " " + styles.link) : styles.link} to="/news">News</NavLink></li>
        <li><NavLink className={navData => navData.isActive ? (styles.active + " " + styles.link) : styles.link} to="/profile">Profile</NavLink></li>
        <li><NavLink className={navData => navData.isActive ? (styles.active + " " + styles.link) : styles.link} to="/music">Music</NavLink></li>
        <li><NavLink className={navData => navData.isActive ? (styles.active + " " + styles.link) : styles.link} to="/settings">Settings</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;