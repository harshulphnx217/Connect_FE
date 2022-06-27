import Head from 'next/head'
import styles from '../styles/forgotPass.module.css'
import Footer from '../components/footer'

export default function changePassword() {

  function changePassword(e) {
    e.preventDefault();
    const data = {
        old_password: document.getElementById("oldpass").value,
        new_password: document.getElementById("newPassword").value,
        confirm_new_password: document.getElementById("confirmNewPassword").value,
        api_key : localStorage.getItem("api_key")
    }
    const formData = new FormData();
    // Checking if all entries are not null
    if(data.old_password !== '' && data.new_password !== '' && data.confirm_new_password !== '' && data.confirm_new_password === data.new_password){
        formData.append("api_key", data.api_key)
        formData.append("old_password",data.old_password)
        formData.append("new_password",data.new_password)
        
        fetch("https://connect-api-social.herokuapp.com/user/change_password", {
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
                alert("Password Changed Successfully!")
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
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.grid}>
            <h2 className={styles.card}><img src="/connectlogo.svg" alt=" CONNECT " /></h2>    
            <div className={styles.cardLogin} style={{border: "1px solid blue"}}>
              <form method='post'>
                  <h2>Change Password</h2>
                  <input className={styles.inp}type="password" id='oldpass' placeholder='Old Password'/>
                  <input className={styles.inp}type="password" id='newPassword' placeholder='New Password'/>
                  <input className={styles.inp}type="password" id='confirmNewPassword' placeholder='Confirm New Password'/>
                  <button className={styles.changePassbtn} id='changePassbtn' onClick={changePassword}>Change Password</button>   
              </form> 
            </div>         
        </div>
      </main>
      <Footer/>
      </div>
  )
}