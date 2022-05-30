import Head from 'next/head'
import styles from '../styles/profile.module.css'

export default function Profile() {
  return (
    <div className={styles.outercontainer}>
      <Head className={styles.container}>
        <title>CONECT</title>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className={styles.logocard}><img src="/connectlogo.svg" alt=" CONNECT " /></h2><br></br>
      <main className={styles.main}>

        
        
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

        <div id={styles.pcentre}>
            <h2 id={styles.pcentre_profilename}>Vaathi Coming</h2>
            <img className={styles.profilepic} src="/profileicon.svg" alt=" PROFILE " />
            <h4>Basic Information</h4>
            <p className={styles.basicinfo}>
                <img className={styles.basicinfoicons} src="/phoneicon.svg" alt=" PHNO " />
                <span className={styles.basicinfospan}>+910000000000</span>
            </p>
            <p className={styles.basicinfo}>
                <img className={styles.basicinfoicons} src="/emailicon.svg" alt=" MAIL " />
                <span className={styles.basicinfospan}>test@email.com</span>
            </p>
            <p className={styles.basicinfo}>
                <img className={styles.basicinfoicons} src="/plannericon.svg" alt=" CAL_INCON " />
                <span className={styles.basicinfospan}>2001.10.01</span>
            </p>

        </div>
      </main>


      <footer className={styles.footer}>
        <div className={styles.footergrid}>
          <div className={styles.terms}>
            <span>
            Terms and Conditions
            </span>
          </div>

          <div className={styles.design}>
            <span>
              Designed And Developed With Love By NOVUS
            </span>
          </div>
        </div> 
      </footer>
    </div>
  )
}
