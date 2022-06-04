import Head from 'next/head'
import Footer from '../components/footer'
import Settings from '../components/settings'
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

        
        
      <Settings/>

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


      <Footer/>
    </div>
  )
}
