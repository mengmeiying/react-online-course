import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><NavLink className={navData => navData.isActive ? (styles.active + " " + styles.link) : styles.link} to="/dialogs">Messages</NavLink></li>
        <li><NavLink className={navData => navData.isActive ? (styles.active + " " + styles.link) : styles.link} to="/news">News</NavLink></li>
        <li><NavLink className={navData => navData.isActive ? (styles.active + " " + styles.link) : styles.link} to="/profile">Profile</NavLink></li>
        <li><NavLink className={navData => navData.isActive ? (styles.active + " " + styles.link) : styles.link} to="/music">Music</NavLink></li>
        <li><NavLink className={navData => navData.isActive ? (styles.active + " " + styles.link) : styles.link} to="/settings">Settings</NavLink></li>
      </ul>
      <Friends state={props.state}/>
    </nav>
  )
}

export default Navbar;