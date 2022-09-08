import "./topbar.css"
import {Link} from "react-router-dom";
import { Context } from "../context/Context";
import { useContext } from "react";

export default function Topbar() {
  const {user,dispatch} = useContext(Context);

  const handleLogout = async ()=>{
    dispatch({type:"LOGOUT"});
  }
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
                  <Link className="link" to="/write" >Write</Link>
                </li>
                <li className="toplistitem" onClick={handleLogout}>
                  {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <Link to="/settings">
              <img className="topImg"
              src={user.profilePic}
              alt="" />
              </Link>
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
