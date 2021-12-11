import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
        <ul className={styles.list}>
          <li><a className={styles.link} href="/profile">Profile</a></li>
          <li><a className={styles.link} href="/dialogs">Messages</a></li>
          <li><a className={styles.link} href="/news">News</a></li>
          <li><a className={styles.link} href="/music">Music</a></li>
          <li><a className={styles.link} href="/settings">Settings</a></li>
        </ul>
      </nav>
    )
}

export default Navbar;