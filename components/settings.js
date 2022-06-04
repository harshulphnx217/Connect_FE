import styles from '../styles/profile.module.css'
export default function Settings(){
    return (
        <div id={styles.pleft}>
            <h5>Settings</h5>
            <p>
                <img className={styles.icons} src="/editprofilelogo.svg" alt=" EDIT PROFILE " />
                <a href='#'>Edit Profile</a>
            </p>
            <p>
                <img className={styles.icons} src="/changepasslogo.svg" alt=" CHANGE PASSWORD " />
                <a href='#'>Change Password</a>
            </p>
            <p>
                <img className={styles.icons} src="/postsarchivelogo.svg" alt=" POSTS " />
                <a href='#'>Posts Archive</a>
            </p>
            <p>
                <img className={styles.icons} src="/logoutlogo.svg" alt=" LOGOUT " />
                <a href='#'>Logout</a>
            </p>
            <h5>Other Information</h5>
            <p>
                <img className={styles.icons} src="/friends 1.svg" alt=" EDIT PROFILE " />
                <a href='#'>Number of friends:</a><span> 123</span>
            </p>
            <button className={styles.findppl} id='findpplbtn' name='FindPeople'>Find People</button>
        </div>
    )
}