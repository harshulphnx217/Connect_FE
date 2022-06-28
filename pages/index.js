import Head from 'next/head'
import Footer from '../components/footer'
import styles from '../styles/index.module.css'
export default function Index() {

  function login(e) {
      e.preventDefault();
      const data = {
          phone_number: document.getElementById("phno").value,
          password: document.getElementById("pswrd").value
      }
      const formData = new FormData();
      // Checking if all entries are not null
      if(data.phone_number !== '' && data.password !== ''){
          formData.append("phone_number", data.phone_number)
          formData.append("password",data.password)
          
          fetch("https://connect-api-social.herokuapp.com/user/login", {
          method: "POST",
          body: formData
      })
          .then(res => res.json())
          .then(res => {
              if (res.status === 200){
                  // Saved apikey to website cookies/sharedPrefs
                  localStorage.setItem("api_key",res.result.api_key);
                  // console.log(localStorage.getItem("api_key"))
                  // <Navigate to='/Home'/>     
                  // Redirection to Home Screen on Success Response
                  window.location.href = '/profile'
              }
              else{
                  console.log(res.result)
                  alert(res.result)
              }
          })
          .catch(err => console.log(err));
      }
      else{
          alert("Please enter your login details properly")
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
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <h2 className={styles.card}><img src="/connectlogo.svg" alt=" CONNECT " /></h2>        
          <div className={styles.cardLogin} style={{border: "1px solid blue"}}>
            <form method='post'>
              <h2>Login</h2>
              <input className={styles.inp}type="tel" id='phno' name='Phone Number' placeholder='Phone Number'/>
              <input className={styles.inp}type="password" id='pswrd' name='Phone Number' placeholder='Password'/>
              <a onClick={forgotPassword}>Forgot Password?</a>
              <button className={styles.lgnbtn} id='lgnbtn' name='Login' onClick={login}>Login</button>   
            </form>
            <button className={styles.regbtn} id='regbtn' name='Register' onClick={goToRegister}>Register</button>   
          </div> 
        </div>
        <Footer/>
      </main>
    </div>
  )
}
function forgotPassword(){
  window.location.href = '/forgotPassword'
}
function goToRegister(){
  window.location.href = '/register'
}

function goToProfile(){
  window.location.href = '/profile'
}