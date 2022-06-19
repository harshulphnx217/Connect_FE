import Head from 'next/head'
import Footer from '../components/footer'
import RegisterForm from '../components/registrationForm'
import styles from '../styles/register.module.css'

export default function Register() {
  return (
    <div >
      <Head className={styles.container}>
        <title>CONECT</title>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <RegisterForm/>
       </main>

     <Footer/>
     
    </div>
  )
}
