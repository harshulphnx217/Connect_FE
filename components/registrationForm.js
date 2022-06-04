import styles from '../styles/register.module.css'
export default function RegisterForm(){
    return(
        <div className={styles.grid}>
            <h2 className={styles.card}><img src="/connectlogo.svg" alt=" CONNECT " /></h2>        
            <form className={styles.cardRegister} method="post">
                <h2>Register</h2>
                <input className={styles.inp}type="tel" id='phno' name='Phone Number' placeholder='Phone Number'/>
                <input className={styles.inp}type="text" id='addrs' name='Address' placeholder='Address'/>
                <input className={styles.inp}type="text" id='fname' name='fname' placeholder='First Name'/>
                <input className={styles.inp}type="text" id='lname' name='lname' placeholder='Last Name'/>
                <input className={styles.inp}type="email" id='mail' name='email' placeholder='Email Address'/>
                <input className={styles.inp}type="password" id='paswrd' name='Password' placeholder='Password'/>
                <input className={styles.inp}type="password" id='cpaswrd' name='Confirm Password' placeholder='Confirm Password'/>
                <br></br><br></br>
                <input className={styles.cb}type="checkbox" id='tnc' name='tnc' value='accept'/> 
                <label for="tnc" id={styles.tncl}>I accept all the Terms and Conditions</label>
                <button className={styles.regbtn} id='regbtn' name='Register'>Register</button>   
            </form>       
        </div>
    )
}