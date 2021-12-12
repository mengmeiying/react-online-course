import Posts from "./MyPosts/Posts";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
  return (
    <div>
      <div className={styles.img_wrapper}></div>
      <ProfileInfo src="https://www.pngarts.com/files/11/Avatar-PNG-Download-Image.png" name="Dude H."/>
      <Posts />
    </div>
  )
}

export default Profile;