import styles from '../styles/navbar.module.css'
export default function NavBar(){
    get_profile_pic()
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
                    <img id='profile_logo'/>
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

    function get_profile_pic() {
        if (typeof window !== 'undefined') {
            console.log('You are on the browser')
            // 👉️ can use localStorage here
            const data = {
                api_key: localStorage.getItem("api_key")
              }
              const formData = new FormData();
              formData.append("api_key", data.api_key)
            
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
                      document.getElementById("profile_logo").src = res.result.profile_pic
                    }
                    else if(res.result.profile_pic === ''){
                      document.getElementById("profile_logo").src = "https://res.cloudinary.com/dapmlabyx/image/upload/v1642256152/media/profile/test_pic_e8s7ee.jpg";
                    }
                  }else{
                      document.getElementById("profile_logo").src = "https://res.cloudinary.com/dapmlabyx/image/upload/v1642256152/media/profile/test_pic_e8s7ee.jpg";
                  }
                })
                .catch(err => console.log(err));
          } else {
            console.log('You are on the server')
          }
      
      }
}