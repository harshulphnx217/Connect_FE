import styles from '../styles/register.module.css'
export default function Footer(){
    return(
        <footer className={styles.footer}>
        <div className={styles.footergrid}>
          <div className={styles.terms}>
            <span>
            Terms and Conditions
            </span>
          </div>

          <div className={styles.design}>
            <span>
              Designed And Developed With Love By NOVUS
            </span>
          </div>
        </div> 
      </footer>
    )
}