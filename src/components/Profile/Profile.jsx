import Posts from "./MyPosts/Posts";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
  return (
    <div>
      <div className={styles.img_wrapper}></div>
      <ProfileInfo src="https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png" name="Dude H."/>
      <Posts />
    </div>
  )
}

export default Profile;