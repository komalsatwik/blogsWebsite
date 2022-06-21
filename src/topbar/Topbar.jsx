import "./topbar.css"
import {Link} from "react-router-dom";

export default function Topbar() {
  const user = false;
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className = "toplist">
                <li className="toplistitem">
                  <Link className="link" to="/" >Home</Link>
                </li>
                <li className="toplistitem">
                  <Link className="link" to="/" >About</Link>
                </li>
                <li className="toplistitem">
                < Link className="link" to="/" >Contact</Link>
                </li>
                <li className="toplistitem">
                  <Link className="link" to="/write" >Write</Link>
                </li>
                <li className="toplistitem">
                  {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <img className="topImg"
              src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/02/Nature-Profile-Picture-Images-Pics-Wallpaper-Free-Download-6-300x271.jpg"
              alt="" />
            ): (
              <ul className="toplist">
                <li className="toplistitem">
                <Link className="link" to="/login" >
                  Login
                </Link>
                </li>
                <li className="toplistitem">
                <Link className="link" to="/register" >
                  Register
                </Link>
                </li>
              </ul>

            )}

            <i className="Search_Icon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
