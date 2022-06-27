import Head from 'next/head'
import styles from '../styles/forgotPass.module.css'
import Footer from '../components/footer'

export default function ForgotPass() {

  function forgotPassword(e) {
    e.preventDefault();
    const data = {
        email_id: document.getElementById("email_ip").value,
    }
    const formData = new FormData();
    // Checking if all entries are not null
    if(data.email_id !== ''){
        formData.append("email", data.email_id)
        
        fetch("https://connect-api-social.herokuapp.com/forgot_passoword", {
        method: "POST",
        body: formData
    })
        .then(res => res.json())
        .then(res => {
            if (res.status === 200){
                // Saved apikey to website cookies/sharedPrefs
                // console.log(localStorage.getItem("api_key"))
                // <Navigate to='/Home'/>     
                // Redirection to Home Screen on Success Response
                alert("Mail sent, Please check your mail for more information and also check your SPAM for the mail!")
            }
            else{
                console.log(res.result)
                alert(res.result)
            }
        })
        .catch(err => console.log(err));
    }
    else{
        alert("Please Check your input!")
    }
  }
  return (
    <div >
      <Head className={styles.container}>
        <title>Connect</title>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <h2 className={styles.card}><img src="/connectlogo.svg" alt=" CONNECT " /></h2>
          <div className={styles.cardLogin} style={{border: "1px solid blue"}} >
            <form>
                <h2>Forgot Password</h2>
                <input className={styles.inp} type="email" id='email_ip' placeholder='Email'/>
                <button className={styles.verifybtn} id='verifybtn' onClick={forgotPassword}>Verify</button>    
            </form>
            <button className={styles.backToLoginbtn} id='backToLoginbtn' onClick={goToLogin}>Back To Login</button>  
          </div>      
          <div className={styles.verifiedAnimation}>
            <h2>Verified</h2>
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_lk80fpsm.json" background="transparent"  speed="1" id={styles.successAnim} loop autoplay></lottie-player>
          </div>
        </div>
      </main>
      <Footer/>

      </div>
  )

  function goToLogin(){
    window.location.href = '/'
  }
}