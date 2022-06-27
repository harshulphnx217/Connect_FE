import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div >
      <Head className={styles.container}>
        <title>Connect</title>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <h2 className={styles.card}><img src="/connectlogo.svg" alt=" CONNECT " /></h2>        
          <div className={styles.cardLogin} style={{border: "1px solid blue"}}>
            <form method='post'>
              <h2>Login</h2>
              <input className={styles.inp}type="tel" id='phno' name='Phone Number' placeholder='Phone Number'/>
              <input className={styles.inp}type="tel" id='pswrd' name='Phone Number' placeholder='Password'/>
              <a href='forgotPassword'>Forgot Password?</a>
              <button className={styles.lgnbtn} id='lgnbtn' name='Login'>Login</button>   
            </form>
            <button className={styles.regbtn} id='regbtn' name='Register' onClick={goToRegister}>Register</button>   
          </div>
        </div>
        <Footer/>
      </main>
    </div>
  )
}

function goToRegister(){
  window.location.href = '/register'
}
