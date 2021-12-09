import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
        <ul className={classes.list}>
          <li><a className={classes.link} href="#">Profile</a></li>
          <li><a className={classes.link} href="#">Messages</a></li>
          <li><a className={classes.link} href="#">News</a></li>
          <li><a className={classes.link} href="#">Music</a></li>
          <li><a className={classes.link} href="#">Settings</a></li>
        </ul>
      </nav>
    )
}

export default Navbar;