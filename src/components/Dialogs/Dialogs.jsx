import styles from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div>
            <h1 className={styles.heading}>Dialogs</h1>
            <div className={styles.wrapper}>
                <ul className={styles.names_list}>
                    <li className={`${styles.names_item} ${styles.active}`}><a href="">Andrew</a></li>
                    <li className={styles.names_item}><a href="">Sasha</a></li>
                </ul>
                <div className={styles.chat}>
                    <div className={styles.message}>
                        <img className={styles.avatar} src="https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png" alt="" />
                        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                            aliquid impedit assumenda corrupti commodi temporibus, repellendus sunt a sapiente odit,
                            nemo laboriosam necessitatibus amet. Debitis provident obcaecati eius aut natus!</p>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Dialogs;