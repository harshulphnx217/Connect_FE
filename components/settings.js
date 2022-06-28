import styles from '../styles/profile.module.css'
export default function Settings(){
    return (
        <div id={styles.pleft}>
            <h5 className={styles.settings_layout}>Settings</h5>
            <p className={styles.settings_layout}>
                <img className={styles.icons} src="/editprofilelogo.svg" alt=" EDIT PROFILE " />
                <a href='#'>Edit Profile</a>
            </p>
            <p className={styles.settings_layout}>
                <img className={styles.icons} src="/changepasslogo.svg" alt=" CHANGE PASSWORD " />
                <a onClick={chngPswrd}>Change Password</a>
            </p>
            <p className={styles.settings_layout}>
                <img className={styles.icons} src="/postsarchivelogo.svg" alt=" POSTS " />
                <a href='#'>Posts Archive</a>
            </p>
            <p className={styles.settings_layout}>
                <img className={styles.icons} src="/logoutlogo.svg" alt=" LOGOUT " />
                <a onClick={logout}>Logout</a>
            </p>
            <h5 className={styles.settings_layout}>Other Information</h5>
            <p className={styles.settings_layout}>
                <img className={styles.icons} src="/friends 1.svg" alt=" EDIT PROFILE " />
                <a href='#'>Number of friends:</a><span> 123</span>
            </p>
            <button className={styles.findppl} id='findpplbtn' name='FindPeople'>Find People</button>
        </div>
    )
    
}
function logout(){
    localStorage.clear()
    window.location.href = "/"
}

function chngPswrd(){
    window.location.href = '/changePassword'

}
