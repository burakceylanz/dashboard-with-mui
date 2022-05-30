import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListIcon from '@mui/icons-material/List';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";

function Navbar() {
  const {dispatch} =useContext(DarkModeContext)
  const [notifi, setNotifi] = useState(false)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/><SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon"/>
            English
          </div>
          <div className="item">
            <ModeNightIcon className="icon"  onClick={()=>dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item" onClick={()=>dispatch({type:"FSTOGGLE"})}>
            <FullscreenIcon className="icon"/>
          </div>
          <div className="item" onClick={()=>setNotifi(!notifi)} >
            {notifi
            ? <div className="notificationbar"> 
              <li className="notli">
              <div className="notlidiv">
              <NotificationsNoneIcon className="icon"/><div>TEXT</div>
              </div>
              <div className="notlidiv">
              <NotificationsNoneIcon className="icon"/><div>TEXT</div>
              </div>
              <div className="notlidiv">
              <NotificationsNoneIcon className="icon"/><div>TEXT</div>
              </div>
              <div className="notlidiv">
              <NotificationsNoneIcon className="icon"/><div>TEXT</div>
              </div>
              <div className="notlidiv">
              <NotificationsNoneIcon className="icon"/><div>TEXT</div>
              </div>
              <div className="notlidiv">
              <NotificationsNoneIcon className="icon"/><div>TEXT</div>
              </div>
              </li>
               
              </div>
          :<></>}
            <NotificationsNoneIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListIcon className="icon"/>
          
          </div>
          <div className="item">
            <img className="avatar" alt=""
            src="https://media-exp1.licdn.com/dms/image/C4E03AQE7hYt6XYzTGQ/profile-displayphoto-shrink_800_800/0/1605441645900?e=1657152000&v=beta&t=gE_Mf3C7dJkS7Qtm1fZEgCWp-MwsrvkfBGiFdX9SVCU"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar