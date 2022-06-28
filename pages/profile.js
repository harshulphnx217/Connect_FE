import Head from 'next/head'
import Footer from '../components/footer'
import Settings from '../components/settings'
import styles from '../styles/profile.module.css'

export default function Profile() {

  function get_user_info(e) {
    // e.preventDefault();
    const data = {
      api_key: localStorage.getItem("api_key")
    }
    const formData = new FormData();
    // Checking if all entries are not null
  
    formData.append("api_key", data.api_key)
  
    fetch("https://connect-api-social.herokuapp.com/user/get-user-info", {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          console.log(res.result)
          response.user_id = res.result.user_id
          response.phno = res.result.phno
          response.email = res.result.email
          response.dob = res.result.dob

          console.log(response.user_id)
          const element = (
            <div>
              <h2 id="uname" className={styles.pcentre_profilename}>{res.result.user_id}</h2>
              <p className={styles.basicinfo}>
                <img className={styles.basicinfoicons} src="/phoneicon.svg" alt=" PHNO " />
                <span id="phno"className={styles.basicinfospan}>{res.result.phno}</span>
            </p>
            <p className={styles.basicinfo}>
                <img className={styles.basicinfoicons} src="/emailicon.svg" alt=" MAIL " />
                <span id="email" className={styles.basicinfospan}>{res.result.email}</span>
            </p>
            <p className={styles.basicinfo}>
                <img className={styles.basicinfoicons} src="/plannericon.svg" alt=" CAL_INCON " />
                <span id="dob"className={styles.basicinfospan}>{res.result.dob}</span>
            </p>
            </div>
          );
          ReactDOM.render(element, document.getElementById("profile"))
        }
        else {
          console.log(res.result)
          // alert(res.result)
        }
      })
      .catch(err => console.log(err));
  }
  
  function get_profile_pic(e) {
    const data = {
      api_key: localStorage.getItem("api_key")
    }
    const formData = new FormData();
    formData.append("api_key", data.api_key)
  
    fetch("http://127.0.0.1:8000/user/fetch-personal-profile", {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          console.log(res.result)
          if (res.result.profile_pic !== '') {
            const element = (
              <div>
                <img src={res.result.profile_pic} className="profile_pic" />
              </div>
            );
            ReactDOM.render(element, document.getElementById("profile_pic"))
          }
          else if(res.result.profile_pic === ''){
            const element = (
              <div>
                <img src="https://res.cloudinary.com/dapmlabyx/image/upload/v1642256152/media/profile/test_pic_e8s7ee.jpg" className="profile_pic" />
              </div>
            );
            ReactDOM.render(element, document.getElementById("profile_pic"))
          }
        }
      })
      .catch(err => console.log(err));
  
  }
  

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
            <h2 id="uname" className={styles.pcentre_profilename}>Vaathi Coming</h2>
            <img id="profile_pic" className={styles.profilepic} src="/profileicon.svg" alt=" PROFILE " />
            <h4>Basic Information</h4>
            <p className={styles.basicinfo}>
                <img className={styles.basicinfoicons} src="/phoneicon.svg" alt=" PHNO " />
                <span id="phno"className={styles.basicinfospan}>+910000000000</span>
            </p>
            <p className={styles.basicinfo}>
                <img className={styles.basicinfoicons} src="/emailicon.svg" alt=" MAIL " />
                <span id="email" className={styles.basicinfospan}>test@email.com</span>
            </p>
            <p className={styles.basicinfo}>
                <img className={styles.basicinfoicons} src="/plannericon.svg" alt=" CAL_INCON " />
                <span id="dob"className={styles.basicinfospan}>2001.10.01</span>
            </p>
        </div>
      </main>


      <Footer/>
    </div>
  )
}
