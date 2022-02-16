import React from "react";
import axios from "axios";
import styles from "./Users.module.css"
import userImage from "./../../assets/images/userImage.png";

class Users extends React.Component {
    constructor(props) {
        super(props)
        if (this.props.usersData.length === 0) {
                    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                        this.props.setUsers(response.data.items);
                    });
        
                }
    }
    
    // getUsers = () => {
    //     if (this.props.usersData.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             this.props.setUsers(response.data.items);
    //         });

    //     }
    // }
    render() {
        return (
            <div>
                {
                    this.props.usersData.map(u =>
                        <div className={styles.user} key={u.id}>
                            <div className={styles.leftBlock}>
                                <img className={styles.avatar} src={u.photos.small !== null ? u.photos.small : userImage} alt="" />
                                {
                                    u.followed
                                        ? <button className={styles.follow} onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                        : <button className={styles.follow} onClick={() => { this.props.follow(u.id) }}>Follow</button>
                                }
                            </div>
                            <div className={styles.userInfo}>
                                <div className={styles.top}>
                                    <h3 className={styles.userName}>{u.name}</h3>
                                    <div>
                                        <p>moscow,</p>
                                        <p>russia</p>
                                    </div>
                                </div>
                                <div>
                                    <p className={styles.status}>{u.status}</p>
                                </div>
                            </div>
                        </div>)
                }
                {/* <button onClick={this.getUsers}>Get users</button> */}
            </div>
        )
    }
}

export default Users;

