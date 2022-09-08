import axios from "axios";
import { useEffect } from "react";
import {useState} from "react";
import "./sidebar.css"
import {Link} from "react-router-dom"

export default function Sidebar() {
  const [cat,setCats] = useState([]);

  useEffect(()=>{
    const getCats = async()=>{
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats()
  },[])  
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About ME</span>
        <img src="data:image/jpeg;base64,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" alt=""/>
        <p>I am komal</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATERGORIES</span>
        <ul className="sidebarList">
          {cat.map((c)=>(
            <Link to={`/?cat=${c.name}`} className="link" >
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
      </div>
      </div>
    </div>
    
  )
}
