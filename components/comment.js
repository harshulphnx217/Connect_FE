import styles from '../styles/comment.module.css'
export default function Comment(){
    return(
        <div className={styles.commentContainer}>
             <img className={styles.profilepic} src="/profileicon.svg" alt=" PROFILE " />
            <p id='username'>Vathi Coming</p>
            <p id='comment'>Commenmt</p>
        </div>
    )

}