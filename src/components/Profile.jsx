import classes from "./Profile.module.css";

const Profile = () => {
    return (
      <div className={classes.content}>
        <div className={classes.img_wrapper}></div>
      <div className={classes.personal_card}>
        <img className={classes.personal_photo} src="https://www.pngarts.com/files/11/Avatar-PNG-Download-Image.png" alt="" />
        <div>
          <h2>Dude H.</h2>
          <ul>
            <li>Date of birth: January, 2</li>
            <li>City: Moscow</li>
            <li>Education: BSU11</li>
            <li>Web-site: none</li>
          </ul>
        </div>
      </div>
      <div className={classes.posts}>
          <h2>My posts:</h2>
          <div>new post</div>
          <ul>
            <li>post1</li>
            <li>post2</li>
            <li>post3</li>
          </ul>
        </div>
    </div>
    )
}

export default Profile;