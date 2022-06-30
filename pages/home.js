import NavBar from '../components/navbar'
import Post from '../components/post'
import Footer from '../components/footer'
import styles from '../styles/home.module.css'
export default function Home(){
    return(
        <main>
            <NavBar/>
            <Post/>
            <Post/>
            <Footer/>
        </main>
    )
}