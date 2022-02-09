import styles from "./Users.module.css"

const Users = (props) => {
    if (props.usersData.length === 0) {
        props.setUsers([
            {
                id: 1,
                name: `maria`,
                status: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                location: {
                    city: 'Moscow',
                    country: "Russia"
                },
                followed: true,
                avatarSrc: 'https://teachingandlearning.schulich.yorku.ca/wp-content/uploads/2019/10/avatar6.png'
            },
            {
                id: 2,
                name: `maria`,
                status: 'hello',
                location: {
                    city: 'Moscow',
                    country: "Russia"
                },
                followed: false,
                avatarSrc: 'https://teachingandlearning.schulich.yorku.ca/wp-content/uploads/2019/10/avatar6.png'
            },
            {
                id: 3,
                name: `maria`,
                status: 'hello',
                location: {
                    city: 'Moscow',
                    country: "Russia"
                },
                followed: true,
                avatarSrc: 'https://teachingandlearning.schulich.yorku.ca/wp-content/uploads/2019/10/avatar6.png'
            },
            {
                id: 4,
                name: `maria`,
                status: 'hello',
                location: {
                    city: 'Moscow',
                    country: "Russia"
                },
                followed: false,
                avatarSrc: 'https://teachingandlearning.schulich.yorku.ca/wp-content/uploads/2019/10/avatar6.png'
            },

        ]);
    }
    return (
        <div>
            {
                props.usersData.map(u =>
                    <div className={styles.user} key={u.id}>
                        <div className={styles.leftBlock}>
                            <img className={styles.avatar} src={u.avatarSrc} alt="" />
                            {
                                u.followed
                                    ? <button className={styles.follow} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                    : <button className={styles.follow} onClick={() => { props.follow(u.id) }}>Follow</button>
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