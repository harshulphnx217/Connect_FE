import styles from '../styles/navbar.module.css'
export default function NavBar(){
    return(
        <div class="navbar" id={styles.nav_bar}>
            <div class="flex-1">
                <a class="btn btn-square btn-ghost" id={styles.logo} href='/home'><img src='/connect_nav.png'/></a>
            </div>
            <div class="flex-none">
                <div class="dropdown dropdown-end" id={styles.friends_icon}>
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                    <img className={styles.icons} src="/friends 1.svg" alt=" EDIT PROFILE " />
                    <span class="badge badge-sm indicator-item">8</span>
                    </div>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>My Friends</a></li>
                    <li><a>Find Friends</a></li>
                </ul>
                </div>
                <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" />
                    </div>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                    <a class="justify-between" href='/profile'>
                        Profile
                    </a>
                    </li>
                    <li><a onClick={logout}>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
    )

    function logout(){
        localStorage.clear()
        window.location.href = "/"
    }
}