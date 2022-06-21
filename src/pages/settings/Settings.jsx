import "./settings.css"
import Sidebar from "../../sidebar/Sidebar";

export default function settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://images.unsplash.com/photo-1519238425857-d6922ed3d613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9uZWx5fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""/>
                <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-solid fa-user-large"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="komal"/>
                <label>Email</label>
                <input type="email" placeholder="komal@gmail.com"/>
                <label>Password</label>
                <input type="password"/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
