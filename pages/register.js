import Head from 'next/head'
import Footer from '../components/footer'
import styles from '../styles/register.module.css'

export default function Register() {

  function register_user(e){
    e.preventDefault();
    const data = {
        user_id: document.getElementById("user_id").value,
        first_name: document.getElementById("fname").value,
        last_name: document.getElementById("lname").value,
        phone_number: document.getElementById("phno").value,
        email_address: document.getElementById("email").value,
        country: document.getElementById("country").value,
        password: document.getElementById("pswrd").value,
        confirm_password: document.getElementById("cpswrd").value,
        date_of_birth: document.getElementById("dob").value,
        gender_field: document.getElementById("gender").value,
    }
    const formData = new FormData();

    // Checking if all entries are not null
    if(data.phone_number !== '' && data.password !== '' && data.user_id !== '' && 
    data.first_name !== '' && data.last_name !== '' && data.email_address !== '' && data.address !== '' &&
    data.country !== '' && data.confirm_password !== '' && data.date_of_birth !== '' && data.gender_field !== ''){
        if(data.phone_number.length!==10){
            alert('Please enter a valid Phone Number')
        }
        else{
            // Checking if password and confirm password are same
        if(data.password === data.confirm_password){
            formData.append('user_id',data.user_id)
            formData.append('first_name',data.first_name)
            formData.append('last_name',data.last_name)
            formData.append('phone_number',data.phone_number)
            formData.append('email_address',data.email_address)
            formData.append('country',data.country)
            formData.append('password',data.password)
            formData.append('date_of_birth',data.date_of_birth)
            formData.append('gender_field',data.gender_field)

            // Hitting the api and getting the response
            fetch("https://connect-api-social.herokuapp.com/user/register", {
                    method: "POST",
                    body: formData
                })
                    .then(res => res.json())
                    .then(res => {
                        if (res.status === 201){
                            console.log(res.result)
                            alert(res.result)
                            window.location.href = '/'
                            // TODO:: Render the response in the UI according to the response
                        }
                        else{
                            console.log(res.result)
                            alert(res.data.email_address || res.data.phone_number || res.data.user_id)
                        }
                        
                    })
                    .catch(err => console.log(err));
        }
        else{
            alert("Confirm Password and Password are not matching!")
        }
        }
        
    }
    else{
        alert("Please enter your details properly")
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
            <form className={styles.cardRegister} method="post">
                <h2>Register</h2>
                <input className={styles.inp}type="text" id='user_id' name='user_id' placeholder='User Id'/>
                <input className={styles.inp}type="tel" id='phno' name='Phone Number' placeholder='Phone Number'/>
                <input className={styles.inp}type="text" id='fname' name='fname' placeholder='First Name'/>
                <input className={styles.inp}type="text" id='lname' name='lname' placeholder='Last Name'/>
                <input className={styles.inp}type="text" id='dob' name='dob' placeholder='Date of Birth (YYYY-MM-DD)'/>
                <input className={styles.inp}type="text" id='country' name='country' placeholder='Country'/>
                <input className={styles.inp}type="email" id='email' name='email' placeholder='Email Address'/>
                <input className={styles.inp}type="text" id='gender' name='gender' placeholder='Gender (M,F,O)'/>
                

                <input className={styles.inp}type="password" id='pswrd' name='Password' placeholder='Password'/>
                <input className={styles.inp}type="password" id='cpswrd' name='Confirm Password' placeholder='Confirm Password'/>
                <br></br><br></br>
                <input className={styles.cb}type="checkbox" id='tnc' name='tnc' value='accept'/> 
                <label id={styles.tncl}>I accept all the Terms and Conditions</label>
                <button className={styles.regbtn} id='regbtn' name='Register' onClick={register_user}>Register</button>   
            </form>       
        </div>
       </main>

     <Footer/>
     
    </div>
  )
}
