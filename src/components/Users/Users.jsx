import styles from "./Users.module.css"

const Users = (props) => {
    return (
        <div>
            {
                props.users.map(u => <div className={styles.user} key={u.id}>
                    <div className={styles.leftBlock}>
                        <img className={styles.avatar} src={u.avatarSrc} alt="" />
                        {
                            u.followed 
                            ? <button className={styles.follow} onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                            : <button className={styles.follow} onClick={() => {props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                    <div className={styles.userInfo}>
                        <div className={styles.top}>
                            <h3 className={styles.userName}>{u.name}</h3>
                            <div>
                                <p>{u.location.city},</p>
                                <p>{u.location.country}</p>
                            </div>
                        </div>
                        <div>
                            <p className={styles.status}>{u.status}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;