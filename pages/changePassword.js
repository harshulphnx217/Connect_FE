import Head from 'next/head'
import styles from '../styles/forgotPass.module.css'
import Footer from '../components/footer'

export default function ForgotPass() {
  return (
    <div >
      <Head className={styles.container}>
        <title>CONNECT</title>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.grid}>
            <h2 className={styles.card}><img src="/connectlogo.svg" alt=" CONNECT " /></h2>        
            <form className={styles.cardLogin} style={{border: "1px solid blue"}} >
                <h2>Forgot Password</h2>
                <input className={styles.inp}type="email" id='email' name='mail' placeholder='Email'/>
                <input className={styles.inp}type="password" id='oldpass' name='oldpass' placeholder='Old Password'/>
                <input className={styles.inp}type="password" id='confirmOldpass' name='confirmOldpass' placeholder='Confirm Old Password'/>
                <button className={styles.changePassbtn} id='changePassbtn' name='changePassbtn'>Change Password</button>   
                  
            </form>       
        </div>
       
        
      </main>
      <Footer/>

      </div>

  )
}