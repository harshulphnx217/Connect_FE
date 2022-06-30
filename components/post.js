import styles from '../styles/post.module.css'
export default function Post(){
    return(
        <div className={styles.postContainer}>
             <div className={styles.postLeft}>
             <img className={styles.profilepic} src="/profileicon.svg" alt=" PROFILE " />
             <p id='username'>Vathi Coming</p>
             <h3 className={styles.postHeading}>Post Heading</h3>
            
             <img className={styles.postpic} src="/selfie.svg" alt=" POSTPIC " />
             <input className={styles.likeBtn}type="image" id='likeBtn' name='likeBtn' src="/likeBtn.svg"/>
             {/* <p id='likeCounter'>123 likes</p> */}
             <input className={styles.commentBtn}type="image" id='commentBtn' name='commentBtn' src="/commentBtn.svg"/>   
             {/* <p className={styles.commentBtn}>100</p> */}
            </div>

            <p className={styles.postDescription}>Post Description</p>
        </div>
    )
}