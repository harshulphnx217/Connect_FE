import Head from 'next/head'
import Footer from '../components/footer'
import Settings from '../components/settings'
import styles from '../styles/profile.module.css'
import FormData from 'form-data';
export default function Profile() {

  function get_user_info(e) {
    // e.preventDefault();
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      const formData = new FormData();
    // Checking if all entries are not null
  
    formData.append("api_key",localStorage.getItem("api_key"))
  
    fetch("https://connect-api-social.herokuapp.com/user/get-user-info", {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          
          console.log("USER : ")
          console.log(res.result)
          console.log(res.result.user_id)
          const element = (
            <div>
              <p className={styles.basicinfo}>
                <img className={styles.basicinfoicons} src="/phoneicon.svg" alt=" PHNO " />
                <span id="phno"className={styles.basicinfospan} >{res.result.phone_number}</span>
              </p>
              <p className={styles.basicinfo}>
                <img className={styles.basicinfoicons} src="/emailicon.svg" alt=" MAIL " />
                <span id="email" className={styles.basicinfospan}>{res.result.email_address}</span>
              </p>
              <p className={styles.basicinfo}>
                <img className={styles.basicinfoicons} src="/plannericon.svg" alt=" CAL_INCON " />
                <span id="dob"className={styles.basicinfospan}>{res.result.dob}</span>
              </p>
            </div>
          );
          
        }
        else {
          console.log(res.result)
          // alert(res.result)
        }
      })
      .catch(err => console.log(err));
    }
    
  }
  
  function get_profile_pic() {
    if (typeof window !== 'undefined') {
        console.log('You are on the browser')
        // 👉️ can use localStorage here
        
          const formData = new FormData();
          formData.append("api_key", localStorage.getItem("api_key"))
        
          fetch("https://connect-api-social.herokuapp.com/user/fetch-personal-profile", {
            method: "POST",
            body: formData
          })
            .then(res => res.json())
            .then(res => {
              console.log(res)
              if (res.status === 200) {
                console.log(res.result)
                if (res.result.profile_pic !== '') {
                  document.getElementById("profile_pic").src = res.result.profile_pic
                }
                else if(res.result.profile_pic === ''){
                  document.getElementById("profile_pic").src = "https://res.cloudinary.com/dapmlabyx/image/upload/v1642256152/media/profile/test_pic_e8s7ee.jpg";
                }
              }else{
                  document.getElementById("profile_pic").src = "https://res.cloudinary.com/dapmlabyx/image/upload/v1642256152/media/profile/test_pic_e8s7ee.jpg";
              }
            })
            .catch(err => console.log(err));
      } else {
        console.log('You are on the server')
      }
  
  }
  
  get_user_info()
  get_profile_pic()
  return (
    <div className={styles.outercontainer}>
      <Head className={styles.container}>
        <title>Connect</title>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className={styles.logocard}><img src="/connectlogo.svg" alt=" CONNECT " /></h2><br></br>
      <main className={styles.main}>

        
        
      <Settings/>

        <div id="profile" className={styles.pcentre}>
            <h2 id="uname" className={styles.pcentre_profilename}></h2>
            <img id="profile_pic" className={styles.profilepic}  alt=" PROFILE " />
            <h4>Basic Information</h4>
            <p className={styles.basicinfo}>
                <img className={styles.basicinfoicons} src="/phoneicon.svg" alt=" PHNO " />
                {/* <span id="phno"className={styles.basicinfospan}></span> */}
            </p>
            <p className={styles.basicinfo}>
                <img className={styles.basicinfoicons} src="/emailicon.svg" alt=" MAIL " />
                {/* <span id="email" className={styles.basicinfospan}></span> */}
            </p>
            <p className={styles.basicinfo}>
                <img className={styles.basicinfoicons} src="/plannericon.svg" alt=" CAL_INCON " />
                {/* <span id="dob"className={styles.basicinfospan}></span> */}
            </p>
        </div>
      </main>


      <Footer/>
    </div>
  )
}
