import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (  
      <div className={styles.personal_card}>
        <img className={styles.personal_photo} src={props.src} alt="" />
        <div>
          <h2>{props.name}</h2>
          <ul>
            <li>Date of birth: January, 2</li>
            <li>City: Moscow</li>
            <li>Education: BSU11</li>
            <li>Web-site: none</li>
          </ul>
        </div>
      </div>
    )
}

export default ProfileInfo;